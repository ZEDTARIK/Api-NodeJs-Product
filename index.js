const express = require('express');
const app = express();

// Route Default in Port http://localhost:3000/
app.get('/', (req,res) => {
    res.send('Hello Zouhair');
});

app.get('/Api/Product', (req,res) => {
    res.send(['PC', 'Sourie', 'Cable']);
});

app.listen(3000, ()=> console.log('App working in Port :  http://localhost:3000/....'));


