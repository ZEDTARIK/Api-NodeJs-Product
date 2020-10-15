const express = require('express');
const app = express();

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
// Change Port in CMD  => export port=4000 or others 
const port = process.env.port || 3000;
app.listen(port, () => console.log(`App working in Port :  http://localhost:/${port}`));


// Data Structures = Type  Array
const products = [
    { productId: 1, ProductName: 'PC DEL 2012' },
    { productId: 2, ProductName: 'Lenovo' },
    { productId: 3, ProductName: 'Mac' },
];
