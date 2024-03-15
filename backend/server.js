const fs = require('fs');
const express = require('express');
const cors = require('cors');
const fetchHmProducts = require('./apiClient');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.get('/api/products/:category', async (req, res) => {
    const category = req.params.category;
    try {
        const products = await fetchHmProducts(category);
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }

    /*  fs.readFile('data/data.json', 'utf8', (err, data) => {
         if (err) {
             console.error('Error reading products file:', err);
             res.status(500).json({ error: 'Failed to read products file' });
             return;
         }
 
         try {
             const products = JSON.parse(data);
 
             const filteredProducts = products.filter(product => product.category === category);
 
             res.json(filteredProducts);
         } catch (error) {
             console.error('Error parsing products data:', error);
             res.status(500).json({ error: 'Failed to parse products data' });
         }
     }); */
});

app.listen(PORT, () => {
    console.log(`Backend server started on port ${PORT}`);
});
