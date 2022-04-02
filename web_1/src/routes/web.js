import express from "express";
let router = express.Router();

let initWebRoute = (app) => {
  router.get("/", (req, res) => {
    return res.render("homepage.ejs");
  });
  router.get("/shoes", (req, res) => {
    return res.render("shoes.ejs");
  });
  router.get("/collection", (req, res) => {
    return res.render("collection.ejs");
  });
  router.get("/racingboots", (req, res) => {
    return res.render("racing boots.ejs");
  });
  router.get("/contact", (req, res) => {
    return res.render("contact.ejs");
  });
  return app.use("/", router);
};
module.exports = initWebRoute;
