const https = require("https");
const fs = require("fs");

const key = fs.readFileSync("F:/cert/CA/localhost/localhost.decrypted.key");
const cert = fs.readFileSync("F:/cert/CA/localhost/localhost.crt");

const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = https.createServer({ key, cert }, app);
server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
