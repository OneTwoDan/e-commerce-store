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
            /* 'X-RapidAPI-Key': '9c8f9c31c0msha0be952da35dddep181571jsnd3689b44bbee',
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com' */
            'X-RapidAPI-Key': 'a114a2b431mshbbe7c8164787176p1b09f7jsne444fa8553f5',
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
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
