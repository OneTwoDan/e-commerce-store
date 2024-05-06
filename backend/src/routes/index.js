const { Router } = require('express');
const router = Router();

const authRoute = require("./authRoutes");

router.use(authRoute);

module.exports = router;