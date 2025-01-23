const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// DB connection
mongoose
  .connect(
    "mongodb+srv://mmahboobdev:Q54NxxMNIQU5JKnV@cluster0.xcn6w.mongodb.net/"
  )
  .then(() => console.log("MongoDB connected "))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({}));
