import React from "react";
import TitleQuestion from "../atoms/TItleQuestion";
import InputQuestion from "../atoms/InputQuestion";


export default function CardQuestion({nPregunta}){
    return(
        <div className="CardQuestion">
            <InputQuestion nPregunta={nPregunta}/>
            <TitleQuestion text={'tipo de pregunta'} />
            <InputQuestion type={"radio"} text={'abierta'}  nPregunta={nPregunta}/>
            <InputQuestion type={"radio"} text={'opcion multiple'} nPregunta={nPregunta}/>
            
            
        </div>
    )
}