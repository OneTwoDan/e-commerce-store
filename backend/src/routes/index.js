const { Router } = require('express');
const router = Router();

const authRoute = require("./authRoutes");
const userRoute = require('./userRoutes')

router.use(authRoute);
router.use(userRoute);

module.exports = router;