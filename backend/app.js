// Use dotenv to load the environment variables in the .env file
require("dotenv").config();

const express = require("express");
const app = express();
// Use the PORT environment if it is defined
// Otherwise, use the default port 3000
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
