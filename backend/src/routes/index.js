const { Router } = require('express');
const router = Router();

const authRoute = require("./authRoutes");
const userRoute = require('./userRoutes');
const productRoute = require("./productRoutes")

router.use(authRoute);
router.use(userRoute);
router.use(productRoute);

module.exports = router;