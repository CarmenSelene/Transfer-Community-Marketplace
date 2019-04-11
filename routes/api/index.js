const router = require("express").Router();
const postRoutes = require("./post");
const userRoutes = require("./user");
const buyRoutes = require("./buy");


// User routes
router.use("/post", postRoutes);
router.use("/user", userRoutes);
router.use("/buy", buyRoutes);

module.exports = router;