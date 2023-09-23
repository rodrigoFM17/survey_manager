import React from "react";

export default function InputQuestion({nPregunta, type, textPlaceholder, text}){

    switch (type){

        case 'radio':
            return(
            <>
                <label className="LabelInput" htmlFor={`${text + nPregunta || ''}`}>
                    <input className="RadioQuestion" name={nPregunta} value={text} type={`${type}`} id={`${text + nPregunta || ''}`}/>
                    {text || "ingrese la pregunta "+ nPregunta}
                    
                </label>
                
            </>
            )
            break;

        default:
            return (
            <>
                <label className="LabelInput" htmlFor={`question${nPregunta}`}>{text || "ingrese la pregunta "+ nPregunta}</label>
                <input className="InputQuestion" type={"text"} id={`question${nPregunta}`} placeholder={`${textPlaceholder || ""}`}/>
            </>
            )
            break; 

        

    } 
   
}