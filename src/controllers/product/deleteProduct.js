const { Product } = require("../../db");



const deleteProduct = async (req, res, next) => {
    const { id } = req.params

    try {
      let productDelete = await Product.findOne({
          where: {
              id
          }
      });
      productDelete = await Product.destroy({
          where: {
              id
          }
      })
      res.json(productDelete).status(200);
    }
     catch (error) {
      console.log(error);
    }
  };


module.exports = {
    deleteProduct,
}
