const { Router } = require("express");

const PaisesRouter = Router();

const { getAllCountries } = require("../controllers/countriesControllers");

PaisesRouter.get("/paises", async (req, res) => {
  try {
    const data = await getAllCountries();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = PaisesRouter;
