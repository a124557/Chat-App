const express = require("express");
const dotenv = require("dotenv");
const { table } = require("./data.js");
const db = require("./configuration/mongo.js");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

//Calling dotenv
dotenv.config();
const app = express();
//Connecting to the MongoDB database
db();

//Telling the server to accept JSON data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Get API is running correctly");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
