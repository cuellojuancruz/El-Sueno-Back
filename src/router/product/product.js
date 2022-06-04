const { Router } = require('express');

const { createProduct } = require("../../controllers/product/createProduct");
const { deleteProduct } = require('../../controllers/product/deleteProduct');
const { getProducts } = require('../../controllers/product/getProduct');
const { updateProduct } = require('../../controllers/product/updateProduct');
const { getNewProducts } = require('../../controllers/product/getProduct')

const product = Router();

product.post("/createProduct", createProduct)
product.delete("/deleteProduct/:id", deleteProduct)
// product.put("/updateProdut/:id", () => console.log("entro al put"))
product.put("/updateProdut/:id", updateProduct)
product.get("/getProduct", getProducts)
product.get("/getProduct/:id", getNewProducts)


product.get("/error", (req, res) => {
    res.status(404);
    res.send("No se encontro dicha ruta")
})

module.exports = product;
