const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "../../02._data_formats", "sample.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
