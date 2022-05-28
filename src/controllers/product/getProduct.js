const { Product } = require("../../db");


const getProducts = async (req, res, next) => {
	try {
		
        
		let product = await Product.findAll();
		return res.json(product);
	} catch (err) {
		console.log(product + "entro al error")
		next(err);
	}
};

const getNewProducts = async (req, res, next) => {
	let id = req.params.id
	
	try{
		let newProducts = await Product.findAll({ id: id })
		return res.json(newProducts)
	} catch (err) {
		console.log(product + "entro al error")
		next(err);
	}
}


module.exports = {
    getProducts,
}
