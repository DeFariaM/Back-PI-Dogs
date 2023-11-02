const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getDogsByIDHandler = require("../Handlers/getDogByIDHandler");
const postDogsHandler = require("../Handlers/postDogsHandler");
const getTempHandler = require("../Handlers/getTempHandler");
const getAllDogsHandler = require("../Handlers/getAllDogsHandler");
const getDogsByNameHandler = require("../Handlers/getDogsByNameHandler");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/name", getDogsByNameHandler);
router.get("/dogs", getAllDogsHandler);
router.get("/dogs/:id", getDogsByIDHandler);
router.post("/dogs", postDogsHandler);
router.get("/temperaments", getTempHandler);

module.exports = router;
