const { Router } = require("express");
const getAllDogs = require("../Controllers/getAllDogs");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", getAllDogs);

module.exports = router;
