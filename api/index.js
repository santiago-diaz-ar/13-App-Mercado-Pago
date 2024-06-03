import express from "express";
import cors from "cors";

import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken:
    "TEST-7814052316154705-052822-c70269b4bb21e2a81eabf32d5128b70a-506563188",
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json("Ruta Base Configurada");
});

app.post("/prueba", async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantify: Number(req.body.quantify),
          unit_price: Number(req.body.price),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "https://www.youtube.com/watch?v=-VD-l5BQsuE&t=2104s",
        failure: "https://www.youtube.com/watch?v=-VD-l5BQsuE&t=2104s",
        pending: "https://www.youtube.com/watch?v=-VD-l5BQsuE&t=2104s",
      },
      auto_return: "approved",
    };
    const preference = new Preference(client);
    const result = await preference.create({ body });
    return res.status(200).json({ id: result.id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log(`Servidor Escuchando en el puerto`);
});
