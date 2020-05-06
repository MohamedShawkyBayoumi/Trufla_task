const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Departments = require('./models/departments');
const Products = require('./models/products');
const ProductsPromotions = require('./models/products_promotions');
const Promotions = require('./models/promotions');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json());

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
app.get('/department', async (req, res) => {
    try {
        const department = await Departments.find({});
        console.log(department);
        res.send(department);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET SINGLE DEPARTMENT
app.get('/department/:department_id', async (req, res) => {
    try {
        const department = await Departments.findById(req.params.department_id);
        // await department.populate('products').execPopulate();
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
    try {
        let products = await Products.find({}).sort('department_id')
        .populate('department_id')
        .populate('promotions')
        .exec()

        let finalProducts = products.map( product => {
            let promotions = product.promotions.map(promotion => ({
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
                department_name: product.department_id.name
            }
        })

        console.log(finalProducts);
        res.send(finalProducts)
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