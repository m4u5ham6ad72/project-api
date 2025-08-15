const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await fetch(process.env.MAIN_URL);
    const text = await response.text();
    res.type("text/plain").send(text);
  } catch (error) {
    res.status(500).send("Error loading script");
  }
});

app.listen(3000, () => {
  console.log("Server is running");
});
