const fetchDataFromApi = require('../../apiClient');

exports.getProducts = async (req, res) => {
    let cachedProducts = {};
    const category = req.params.category;
    try {
        if (cachedProducts[category]) {
            res.json(cachedProducts[category]);
        } else {
            const products = await fetchDataFromApi(category);
            cachedProducts[category] = products;
            res.json(products);
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};