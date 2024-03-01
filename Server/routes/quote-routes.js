const express = require("express");
const quoteRouter = express.Router();
const {
  quoteCreation,
  getAllQuote,
} = require("../controllers/quote-controller");

quoteRouter.get("/", getAllQuote);
quoteRouter.post("/quoteCreation", quoteCreation);

module.exports = quoteRouter;
