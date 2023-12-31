import React from "react";

export default function InputQuestion({nPregunta, type, textPlaceholder, text}){

    switch (type){

        case 'radio':
            return(
            <>
                <label className="LabelInput" htmlFor={`${text + nPregunta || ''}`}>
                    <input className="RadioQuestion" name={`${nPregunta}`} value={text} type={`${type}`} id={`${text + nPregunta || ''}`} required/>
                    {text || "ingrese la pregunta "+ nPregunta}
                    
                </label>
                
            </>
            )
            break;

        case 'number':
            return (
                <>
                    <label className="LabelInput" htmlFor={`${'closed'+ nPregunta || ''}`}>{text}</label>
                    <input className="InputQuestionNumber" type={`${type}`} id={`question${nPregunta}`} min={2} max={10}/>

            </>
            )

        case 'text':
            return(
                <>
                    <label className="LabelInput" htmlFor={`question${nPregunta}`}>{text || "ingrese la pregunta "+ nPregunta}</label>
                    <input className="InputQuestion" type={type} id={`question${nPregunta}`} placeholder={`${textPlaceholder || ""}`} required/>
                </>
            )

            break;

        default:
            return (
            <>
                <label className="LabelInput" htmlFor={`question${nPregunta}`}>{text || "ingrese la pregunta "+ nPregunta}</label>
                <input className="InputQuestion" type={"text"} id={`question${nPregunta}`} placeholder={`${textPlaceholder || ""}`} required    />
            </>
            )
            break; 

        

    } 
   
}