const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/product', product_router);

router.get("/error", (req, res) => {
    res.status(404);
    res.send("No se encontro dicha ruta")
})

module.exports = router;
