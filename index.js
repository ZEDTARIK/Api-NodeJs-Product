const express = require('express');
const Joi = require('joi');
const app = express();

// Send an Receive Data in Format Json 
app.use(express.json());

// Change Port in CMD  => export port=4000 or others 
const port = process.env.port || 3000;
app.listen(port, () => console.log(`App working in Port :  http://localhost:/${port}`));


// Data Structures = Type  Array
const products = [
    { productId: 1, productName: 'PC DEL 2012' },
    { productId: 2, productName: 'Lenovo' },
    { productId: 3, productName: 'Mac' },
];

// Route Default in Port http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello Zouhair');
});
// List Products
app.get('/Api/Product', (req, res) => {
    res.send(products);
});
// Get  Product By id 
app.get('/Api/Product/:id', (req, res) => {
    //res.send(req.params.id);
    //res.send(req.params);
    const findProductById = products.find(element => element.productId == req.params.id);
    if (!findProductById) {
       return res.send('This Product not Found ?? ');
    }
    res.send(findProductById);

});
// Add New Product 
app.post('/Api/Product/', (req, res) => {

    const product = {
        productId: req.body.productId,
        productName: req.body.productName
    }
    // Validation Body 
    const { error } = productValidate(req.body);

    if (error) {
        return res.send(error.details[0].message);
    } else {
        products.push(product);
        res.send(product);
    }
});

app.put('/Api/Product/:productId', (req, res) => {
    const findProductById = products.find(element => element.productId == req.params.productId);
    if (!findProductById) {
        return   res.send('This Product not Found ?? ');
    }
    const { error } = productValidate(req.body);

    if (error) {
        return res.send(error.details[0].message);
    } else {
        findProductById.productId = req.body.productId
        findProductById.productName = req.body.productName   
        res.send(findProductById);
    }

});

app.delete('/Api/Product/:productId', (req, res) => {
    const findProductById = products.find(element => element.productId == req.params.productId);
    if (!findProductById) {
       return  res.send(`This Product N ${ findProductById.productId }  not Found ??`);
    }
    const productIndex = products.indexOf(findProductById);
    products.splice(productIndex, 1);
    res.send(`Product is Deleted`);
});

// Create function Validate
function productValidate(product) {

    const schema = {
        productId: Joi.number().required().integer(),
        productName: Joi.string().min(3).required()
    };
    return Joi.validate(product, schema);
}