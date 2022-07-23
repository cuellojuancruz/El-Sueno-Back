const { Router } = require('express');

const { findOrCreateUser } = require("../../controllers/user/User")


const user = Router();

user.post("/findOrCreate", findOrCreateUser)
// user.delete("/deleteuser/:id", deleteuser)
// user.put("/updateProdut/:id", updateuser)
user.get("/getuser", getusers)
user.get("/getuser/:id", getNewusers)


product.get("/error", (req, res) => {
    res.status(404);
    res.send("No se encontro dicha ruta")
})

module.exports = user;
