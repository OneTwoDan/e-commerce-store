const express = require('express');
/* const fileUpload = require('express-fileupload'); */
/* const morgan = require('morgan'); */
const router = require('./routes/index.js');

const server = express();
/* server.use(fileUpload({ useTempFiles: true })); */
/* server.use(morgan("dev")); */
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use('/', router);

module.exports = { server };
