const { Router } = require('express');

const { findOrCreateUser } = require("../../controllers/user/User")
// const { getusers } = require("../../controllers/user/User")

const user = Router();

// user.delete("/deleteuser/:id", deleteuser)
// user.put("/updateProdut/:id", updateuser)
// user.get("/getuser/:id", getNewusers)
// user.get("/getuser", getusers)
user.post("/findOrCreate", findOrCreateUser)


user.get("/error", (req, res) => {
    res.status(404);
    res.send("No se encontro dicha ruta")
})

module.exports = user;
