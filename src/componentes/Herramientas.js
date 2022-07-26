import React from "react";
import App from "../App";
import "../hojas-de-estilo-stylesheets/Herramientas.css";

function Herramientas(props) {
    return(
      <div className="contenedor-herramientas">
        <img className="imagen-herramientas" 
        src={require(`../imagenes/${props.imagen}.png`)}
        alt="Foto Canguro"/>
        <div className="contenedor-texto-herramientas">
          <p className="nombre-herramientas">{props.nombre} </p>
          <p className="funcionamiento-herramientas">{props.funcionamiento}</p>
          <p className="texto-herramienta">{props.descripcion}</p>

        </div>
      </div>
    );
}
export default Herramientas;