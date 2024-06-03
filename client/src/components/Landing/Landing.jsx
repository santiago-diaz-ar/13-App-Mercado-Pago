import React from "react";
import style from "./Landing.module.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";
import axios from "axios";

function Landing() {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-48734d0e-5f82-419b-ad88-5cf4dc441eae", {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const response = await axios.post("/prueba", {
        title: "R6",
        quantify: 1,
        price: 100,
      });
      const { id } = response.data;
      return id;
    } catch (error) {
      return console.log(error.message);
    }
  };

  const handleBy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.tarjeta}>
        <strong>Developers Colombia</strong>
        <br />
        <br />
        <button onClick={handleBy} className={style.botonCompras}>
          add Moto
        </button>

        <Wallet
          initialization={{ preferenceId: preferenceId }}
          customization={{ texts: { valueProp: "smart_option" } }}
        />
      </div>
    </div>
  );
}

export default Landing;
