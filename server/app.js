const PORT = 8000;
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const fs = require("fs");

const scrapeDynamicWebpage = require("./scrapers/dynamincSiteScraper");
const scrapeStaticWebpage = require("./scrapers/staticSiteScraper");


var folder = "./data";

if (!fs.existsSync(folder)) {
 fs.mkdirSync(folder);
 console.log("Folder Created Successfully.");
}
app.get("/", function (req, res) {
 res.send("Happy web scraping");
});
app.listen(PORT, () => {
 console.log("Server running on port " + PORT);
});

// scrapeDynamicWebpage();
scrapeStaticWebpage();
scrapeDynamicWebpage();
const data = require("./data/telemartData.json");
app.get("/items", function (req, res) {
 res.json(data);
});
