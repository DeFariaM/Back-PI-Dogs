const { Router } = require("express");
const getAllDogsHandler = require("../Handlers/getAllDogsHandler");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", getAllDogsHandler);

module.exports = router;
