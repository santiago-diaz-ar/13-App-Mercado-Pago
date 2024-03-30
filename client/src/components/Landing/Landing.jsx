import React from "react";
import style from "./Landing.module.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";
import axios from "axios";

function Landing() {
  const [preferenceId, setPreferenceId] = useState();
  initMercadoPago("YOUR_PUBLIC_KEY", {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const response = await axios.post("compraraR6/v1", {
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
        <strong>Elizalde construcciones s.a.s</strong>
        <br />
        <br />
        <button onClick={handleBy} className={style.botonCompras}>
          Comprar Yamaha R6
        </button>

        {preferenceId && (
          <Wallet
            initialization={{ preferenceId: preferenceId }}
            customization={{ texts: { valueProp: "smart_option" } }}
          />
        )}
      </div>
    </div>
  );
}

export default Landing;
