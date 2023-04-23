const express = require("express");
require("dotenv").config();

const textRouter = express.Router();
let key = "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";


textRouter.post("/", async (req, res) => {
  try {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "How are you?" }],
      }),
    };

    let result = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    let data = await result.json();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = { textRouter };
