const axios = require("axios");
const productController = require("./controllers/product-controller")
const dal = require("./dal")
const express = require("express")
const server = express();

async function getRandomProduct(req, response) {

    const products = productController.getAllProductsAsync()
    const arr = [];
    arr.push(products)
    await axios.get("http://localhost:4100/products");

    return arr;
}
server.listen(4100, () => console.log("Listening on http://localhost://4100"))


module.exports = getRandomProduct;