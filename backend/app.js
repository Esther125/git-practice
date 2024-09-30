// Load dotenv to use the settings in the .env file
require("dotenv").config();

const express = require("express");
const app = express();
// Set the default port to 3000
// If a port is defined in the .env file, use that value instead
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
