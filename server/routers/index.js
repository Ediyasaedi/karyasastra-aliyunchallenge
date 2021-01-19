const route = require("express").Router();
const userRoute = require("./user");
const categoryRoute = require("./category");
const karyaRoute = require("./karya");
const commentRoute = require("./comment");

route.use("/api/v1/user", userRoute);
route.use("/api/v1/category", categoryRoute);
route.use("/api/v1/karya", karyaRoute);
route.use("/api/v1/comment", commentRoute);

module.exports = route;
