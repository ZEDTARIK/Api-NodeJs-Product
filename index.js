const express = require('express');
const app = express();

// Route Default in Port http://localhost:3000/
app.get('/', (req,res) => {
    res.send('Hello Zouhair');
});

app.get('/Api/Product', (req,res) => {
    res.send(['PC', 'Sourie', 'Cable']);
});

// Change Port in CMD  => export port=4000 or others 
const port = process.env.port || 3000;
app.listen(port, ()=> console.log(`App working in Port :  http://localhost:/${port}`));


