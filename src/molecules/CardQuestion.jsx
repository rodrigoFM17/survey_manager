import React, { useState } from "react";
import TitleQuestion from "../atoms/TItleQuestion";
import InputQuestion from "../atoms/InputQuestion";
import '../styles/Question.css'
import CloseQuestion from "./CloseQuestion";

export default function CardQuestion({nPregunta, text}){


    return(
        <fieldset className="CardQuestion">
            <InputQuestion nPregunta={nPregunta}/>
            <TitleQuestion text={'tipo de pregunta'} />
            <InputQuestion type={"radio"} text={'abierta'}  nPregunta={nPregunta}/>
            <InputQuestion type={'radio'} text={'numerico'} nPregunta={nPregunta} />
            <InputQuestion type={"radio"} text={'opcion multiple'} nPregunta={nPregunta}/>
            <CloseQuestion nPregunta={nPregunta} />
            
            
            
        </fieldset>
    )
}