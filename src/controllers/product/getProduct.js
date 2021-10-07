const { Product } = require("../../db");


const getProduct = async (req, res, next) => {
	try {
		var {id} = req.params;
        
		var product = await Product.findOne({
			where: {
				id,
			},
		});
		res.json(product);
	} catch (err) {
		next(err);
	}
};


module.exports = {
    getProduct,
}
