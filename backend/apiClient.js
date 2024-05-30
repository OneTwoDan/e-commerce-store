require('dotenv').config();

const axios = require('axios');

async function fetchDataFromApi(category) {
    const options = {
        method: 'GET',
        url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
        params: {
            country: 'us',
            lang: 'en',
            currentpage: '0',
            pagesize: '28',
            categories: getCategory(category)
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY2,
            'X-RapidAPI-Host': process.env.RAPIDAPI_HOST2
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        throw error;
    }
}

function getCategory(category) {
    switch (category) {
        case 'women':
            return 'ladies_all';
        case 'men':
            return 'men_all';
        case 'kids':
            return 'kids_all';
        case 'beauty':
            return 'beauty_all';
        default:
            throw new Error('Invalid category');
    }
}

module.exports = fetchDataFromApi;
