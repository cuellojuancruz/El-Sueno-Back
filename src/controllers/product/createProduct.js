const { Product } = require("../../db");



const createProduct = async (req, res, next) => {
    try {
      let newProduct = await Product.create({
        name: req.body.name,
        description: req.body.description,
        expirationdate: req.body.expirationdate,
      });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);
    }
  };


module.exports = {
    createProduct,
}

