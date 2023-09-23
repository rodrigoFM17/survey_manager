import React from "react";

export default function TitleQuestion({nPregunta, text}){
    return(
        <h3 className="TitleQuestion">{`${text || "ingrese la pregunta " + nPregunta }`}</h3>
    )
}