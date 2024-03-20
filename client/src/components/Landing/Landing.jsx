import React from "react";
import style from "./Landing.module.css";

function Landing() {
  return (
    <div className={style.container}>
      <div className={style.tarjeta}>
        <strong>Elizalde construcciones s.a.s</strong>
        <br />
        <br />
        <button className={style.botonCompras}>Comprar en Mercado Pago</button>
      </div>
    </div>
  );
}

export default Landing;
