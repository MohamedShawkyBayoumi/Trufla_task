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

app.post('/departments', async (req, res) => {
    try {
        const department = new Departments(req.body);
        let response = await department.save();
        res.send(response);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/products', async (req, res) => {
    try {
        const product = new Products(req.body);
        let response = await product.save();
        res.send(response);
    } catch (error) {
        res.status(400).send(error);
    }
});

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))