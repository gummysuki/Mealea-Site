const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Mealea! Enjoy...');
});
app.post('/', (req, res) => {   
    res.send('Received!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
