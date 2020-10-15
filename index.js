const express = require('express');
const Joi = require('joi');
const app = express();

// Send an Receive Data in Format Json 
app.use(express.json());

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
    if(!findProductById) {
        res.send('This Product not Found ?? ');
    }
    res.send(findProductById);

});

// Add New Product 
app.post('/Api/Product/', (req,res) => {
    const schema = {
        productId : Joi.number().integer().required(),
        productName : Joi.string().min(3).required()
    };

    const joiError = Joi.validate(req.body, schema);
    
    if(joiError.error) {
        return res.send(joiError.error.details[0].message);
    }

    const product = {
        productId: req.body.productId,
        productName : req.body.productName
    }

    products.push(product);
    res.send(product);
    
})

// Change Port in CMD  => export port=4000 or others 
const port = process.env.port || 3000;
app.listen(port, () => console.log(`App working in Port :  http://localhost:/${port}`));


// Data Structures = Type  Array
const products = [
    { productId: 1, productName: 'PC DEL 2012' },
    { productId: 2, productName: 'Lenovo' },
    { productId: 3, productName: 'Mac' },
];
