import React, { useContext, useEffect } from "react";
import Title from "../atoms/Title";
import CardQuestion from "../molecules/CardQuestion";
import PlusButton from "../atoms/PlusButton";
import { useState } from "react";
import QuestionContext from '../context/QuestionContext'


export default function CreateForm(){

    const [question, setQuestion] = useState([1,2,3])

    const addQuestion = () => {
        alert('negro')
        let aux2 = question
        let aux = question[question.length - 1] + 1
        
        aux2.push(aux)
        console.log(aux2)
        setQuestion(aux2) 
        
    }

    
    return(
        <>
        <Title />
        {
        question.map(pregunta => <CardQuestion nPregunta={pregunta} key={pregunta}/> 
                                    
        )}
        <button onClick={ () => {addQuestion()}}>agregar</button>
        </>
    )
}