import express from "express";
import bodyParser from "body-parser";
// user?id=7
import viewEngine from "./config/viewEngine";
import initwebRoutes from "./route/web";
import connectDB from "./config/connecDB";
require("dotenv").config();
let dotenv;
let app = express();
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initwebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
// PORT === undefined =>6969
app.listen(port, () => {
  //callback
  console.log("Backend Nodejs đang chạy: " + port);
});
