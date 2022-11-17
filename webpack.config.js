const path = require("path");

module.exports = {
    entry: {
        index : __dirname + "/src/index.js",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
    },
};