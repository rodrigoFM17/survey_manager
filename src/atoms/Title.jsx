import React from "react";
import InputQuestion from "./InputQuestion";

export default function Title({text}){

    if (text){
        return <h1 className="Title">{`${text}`}</h1>
    } else {
        return <InputQuestion text={'Ingrese el titulo de la encuesta'} nPregunta={'titleSurvey'} />
    }
    
}