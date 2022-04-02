import express from "express";

// config view engine for an express app
let configvViewEngine = (app) => {
  app.use(express.static("./src/views"));
  app.set("view engine", ".ejs");
  app.set("views", "./src/views");
};
module.exports = configvViewEngine;
