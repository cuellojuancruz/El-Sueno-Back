const { Router } = require('express');



const product = Router();

product.get("/createProduct", callbackcontroller)

router.get("/error", (req, res) => {
    res.status(404);
    res.send("No se encontro dicha ruta")
})

module.exports = router;
