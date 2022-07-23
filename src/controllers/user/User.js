const { Op } = require('sequelize');
const { User } = require("../../db");


const findOrCreateUser = async (req, res, next) => {
	let {id} = req.params
	let {user} = req.body

	
		try {
			
			
			let userInDB = await User.findOne(id);

			if(userInDB){
				res.status(304).json("El usuario ya esta registrado")
			}
			if(user.type === "cliente"){
				const newUser = await User.create(user)
				res.status(201).json(newUser)
			}
			else{
				// preguntar xD
			}



		} catch (err) {
			console.log(err + "entro al error")
			next(err);
		}

	// else{

	// 	try{
	// 		console.log(Object.keys(Product.tableAttributes))
	// 		let product = await Product.findAll({
	// 			where:{
	// 				name: {
	// 					[Op.iLike]: `%${name}%`
	// 				}
	// 			}
	// 		})
	// 		return res.json(product)
	// 	}catch (err) {
	// 		console.log(product + "entro al error")
	// 		next(err);
	// 	}
	// }
};


module.exports = { findOrCreateUser }
