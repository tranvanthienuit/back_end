import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./configs/viewEngine";
import webRoutes from "./routes/web";
require("dotenv").config();
let app = express();
//config view Engine
viewEngine(app);
//config web routes
webRoutes(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log("App is running at the port: " + PORT);
});
