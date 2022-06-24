const { Op } = require('sequelize');
const { Product } = require("../../db");
const product = require("../../router/product/product");


const getProducts = async (req, res, next) => {
	let {name} = req.query


	if(!name){
		try {
			
			
			let product = await Product.findAll();
			return res.json(product);
		} catch (err) {
			console.log(err + "entro al error")
			next(err);
		}
	}
	else{

		try{
			product = await Product.findAll({
				where:{
					name: {
						[Op.iLike]: `%${name}%`
					}
				}
			})
			return res.json(product)
		}catch (err) {
			console.log(product + "entro al error")
			next(err);
		}
	}
};

const getNewProducts = async (req, res, next) => {
	console.log("entro al back del newproducts")
	let id = req.params.id
	
	try{
		let newProducts = await Product.findAll({ limit: id })
		return res.json(newProducts)
	} catch (err) {
		console.log(err + "entro al error")
		next(err);
	}
}



module.exports = {
    getProducts,
	getNewProducts,
}
