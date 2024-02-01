const { Router } = require("express");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
//rutas
const countriesRouter = require("./countriesRouter");

const router = Router();

router.use(express.json());
router.use(morgan("dev"));
router.use(cors());

router.use("/paises", countriesRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
