const express = require("express");
const app = express();
var cors = require("cors");
const userRouter = require("./routes/user-routes");
const quoteRouter = require("./routes/quote-routes");

require("./config/db");
app.use(express.json());
app.use(cors());
app.use("/api", userRouter);
app.use("/quoteApi", quoteRouter);

app.listen(5000, () => console.log("app started at 5000..."));
