import express from "express";
import homecontroller from "../controllers/homecontroller";

let route = express.Router();
let initWebRoutes = (app) => {
  route.get("/", homecontroller.getHomePage);
  route.get("/about", homecontroller.getAboutPage);
  route.post("/post-crud", homecontroller.postCRUD);
  return app.use("/", route);
};

module.exports = initWebRoutes;
