const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017",
  (err) => {
    if (!err) {
      console.log("connected to database 😂");
    } else {
      console.log(err);
    }
  }
);
