const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Departments = require('./models/departments');
const Products = require('./models/products');
const Promotions = require('./models/promotions');
const shuffle = require('./utils/utils');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* Departments Routes */

// POST A DEPARTMENT
app.post('/departments', async (req, res) => {
    try {
        const department = new Departments(req.body);
        let response = await department.save();
        res.send(response);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET ALL DEPARTMENTS
app.get('/departments', async (req, res) => {
    try {
        const department = await Departments.find({});
        console.log(department);
        res.send(department);
    } catch (error) {
        res.status(400).send(error);
    }
});

/* Products Routes */

app.post('/products', async (req, res) => {
    try {
        const product = new Products(req.body);
        let response = await product.save();
        res.send(response);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/products', async (req, res) => {
    let perPage = Number(req.query.perPage),
        page = Math.max(0, req.query.page),
        match = {};
    if(req.query.department_id){
        match.department_id = req.query.department_id
    }

    try {
        let products = await Products.find(match).limit(perPage).skip(perPage * page).sort('department_id')
        .populate('department_id')
        .populate('promotions')
        .exec()

        let finalProducts = products.map( product => {
            let promotions = product.promotions.map(promotion => ({
                p_id: promotion._id,
                code: promotion.code,
                active: promotion.active,
                discount: promotion.discount,
                discounted_price: Number(Number(product.price) - Number(promotion.discount) )
            }))
            return {
                _id: product._id,
                name: product.name,
                price: product.price,
                promotions: promotions.filter( promotion => promotion.active),
                department_name: product.department_id.name,
                department_id: product.department_id._id
            }
        })

        console.log(finalProducts);
        res.send(shuffle(finalProducts))
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get('/products/:department_id', async (req, res) => {
    try {
        let products = await Products.findById(req.params.department_id);
        await products.populate('department_id').execPopulate();
        console.log(products);
        res.send(products);
    } catch (error) {
        res.send(error);
    }
});

app.post('/promotions', async (req, res) => {
    try {
        let promotion = new Promotions(req.body);
        let response = await promotion.save();
        console.log(response);
        res.send(response);
    } catch (error) {
        res.status(500).send(error)
    }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))