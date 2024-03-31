const express = require("express");
const cors = require("cors");

// SDK de Mercado Pago
const { MercadoPagoConfig } = require("mercadopago");
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: "YOUR_ACCESS_TOKEN" });

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Hello Word ! Llego Papi");
});

app.listen(port, () => {
  console.log(`Servidor Escuchando en el puerto ${port}`);
});
