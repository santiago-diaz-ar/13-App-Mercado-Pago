const { Router } = require("express");

const PaisesRouter = Router();

const {
  getAllCountries,
  getDetailCountries,
  getNamePais,
  postPaisDb,
} = require("../controllers/countriesControllers");

PaisesRouter.get("/", async (req, res) => {
  try {
    const data = await getAllCountries();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

PaisesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const datos = await getDetailCountries(id);
    return res.status(200).json(datos);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

PaisesRouter.get("/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const datos = await getNamePais(name);
    return res.status(200).json(datos);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

PaisesRouter.post("/addPais", async (req, res) => {
  const { name } = req.body;
  try {
    const datos = await postPaisDb(name);
    return res.status(200).json(datos);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

module.exports = PaisesRouter;
