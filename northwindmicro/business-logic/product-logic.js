const dal = require("../dal");

async function getAllProductsAsync() {
    const sql = `SELECT * FROM products`;
    const products = await dal.executeAsync(sql);
    return products;
}


module.exports = {
    getAllProductsAsync
};

