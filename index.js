const express = require('express');
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
app.post('/Api/Product', (req,res) => {
    const product = {
        id : req.body.id,
        ProductName : req.body.ProductName
    }
    products.push(product);
    res.send(product);
})

// Change Port in CMD  => export port=4000 or others 
const port = process.env.port || 3000;
app.listen(port, () => console.log(`App working in Port :  http://localhost:/${port}`));


// Data Structures = Type  Array
const products = [
    { productId: 1, ProductName: 'PC DEL 2012' },
    { productId: 2, ProductName: 'Lenovo' },
    { productId: 3, ProductName: 'Mac' },
];
