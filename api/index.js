import express from "express";
import cors from "cors";

import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({ accessToken: "YOUR_ACCESS_TOKEN" });

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res
    .status(200)
    .json("Codigo de Back Para Compras Listo y a la Esperza de Compra");
});

app.post("/create_preference", async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantify: Number(req.body.quantify),
          unit_price: Number(req.body.unit_price),
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
  console.log(`Servidor Escuchando en el puerto ${port}`);
});
