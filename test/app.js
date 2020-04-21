
// try to connect to mysql and print hello on page
const dal = require("./dal")
// Our Microservice: 
async function getRandomProduct(req, res) {
    const sql = `SELECT * FROM products`;
    const products = await dal.executeAsync(sql);
    const proArr = products[Math.floor(Math.random() * 70)];
    return proArr;
}


module.exports = getRandomProduct;