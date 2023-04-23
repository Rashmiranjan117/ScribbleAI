const express = require("express");
require("dotenv").config();
var bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
const app = express();
const { textRouter } = require("./Routes/text.routes");


// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const configuration = new Configuration({
  organization: "org-OIwTmh7g3MFBKJxJtwO4YN0K",
  apiKey: process.env.key,
});

const ai = new OpenAIApi(configuration);

app.use("/text", textRouter);

// app.post("/", async (req, res) => {
//   const { messages } = req.body;
// });

app.listen(process.env.port, () => {
  try {
    console.log("Server is running on port", process.env.port);
  } catch (err) {
    console.log("Something went wrong", err);
  }
});
