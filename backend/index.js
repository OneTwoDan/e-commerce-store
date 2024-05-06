/* const express = require('express');
const cors = require('cors');
const fetchHmProducts = require('./apiClient');
const sequelize = require('./src/database/connection');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

let cachedProducts = {};

app.get('/api/products/:category', async (req, res) => {
    console.log('cachedProducts', cachedProducts)
    const category = req.params.category;
    try {
        if (cachedProducts[category]) {
            res.json(cachedProducts[category]);
        } else {
            const products = await fetchHmProducts(category);
            cachedProducts[category] = products;
            res.json(products);
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

sequelize.sync().then(() => {
    console.log('Modelos sincronizados correctamente.');
    // Iniciar el servidor
    app.listen(PORT, () => {
        console.log(`Backend server started on port ${PORT}`);
    });
}).catch(err => {
    console.error('Error to sync models:', err);
}); */

const { createServer } = require('http');
const dotenv = require("dotenv");

const { server } = require('./src/app.js');
const { conn } = require('./src/database/connection.js');

dotenv.config();

const { SERVER_PORT } = process.env;

const httpServer = createServer(server);


httpServer.listen(SERVER_PORT, async () => {
    await conn.sync({ alter: true });
    console.log(`Listening on port ${SERVER_PORT}`);
});


