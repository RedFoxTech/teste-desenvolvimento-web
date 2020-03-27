const { readFileSync } = require("fs");

const rawData = readFileSync("../Pokemon Go.mapped.csv", "utf8");
console.log("Raw data length", rawData.length);