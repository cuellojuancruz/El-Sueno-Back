const { Product } = require("../../db");

const updateProduct = async (req, res, next) => {
	const {id} = req.params;
	const {name, description, expirationdate} = req.body;

	try {
		await Product.update(
			{
				name: name,
				description: description,
				expirationdate: expirationdate			},
			{where: {id}}
		);
		const product = await Product.findOne({where: {id}});
		res.send(product);
	} 
	catch (error) {
		
		res.status(403).json(new Error(error.message))
	}

};


module.exports = {
    updateProduct,
}
