import React, { useEffect, useState } from "react";
import InputQuestion from "../atoms/InputQuestion";

export default function CloseQuestion({nPregunta}){

    const [closed, setClosed] = useState([])

    const setNumberClosed = () =>{
        const nClosed = document.getElementById(`closed${nPregunta}`).value
        let arrayAux = []

        for ( let i=1; i <= nClosed; i++){
            arrayAux.push(i)
        }

        
        setClosed([...arrayAux])
    }

    useEffect(() =>{
        
    })

    return (
        <div className="CloseQuestion" id={`CloseQuestion${nPregunta}`}>
            <div>
                <InputQuestion text={"numero de preguntas"} type={'number'} nPregunta={nPregunta}/>
                <button type="button" onClick={ () => {setNumberClosed()}}>Aceptar</button><br />
            </div>
            {
                closed.map( closedOne => <InputQuestion nPregunta={closedOne} text={`ingrese la opcion ${closedOne}`}/>  )         
            }
            
        </div>

    )
}