const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const  product  = require("./product/product")

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/product', () => console.log("entro al index"));
router.use('/product', product);

router.get("/error", (req, res) => {
    res.status(404);
    res.send("No se encontro dicha ruta")
})

module.exports = router;
