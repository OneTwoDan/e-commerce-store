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
});

app.listen(PORT, () => {
    console.log(`Backend server started on port ${PORT}`);
});
