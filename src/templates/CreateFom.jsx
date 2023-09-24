import React, { useContext, useEffect } from "react";
import Title from "../atoms/Title";
import CardQuestion from "../molecules/CardQuestion";
import PlusButton from "../atoms/PlusButton";
import { useState } from "react";
import QuestionContext from '../context/QuestionContext'


export default function CreateForm(){

    const [question, setQuestion] = useState([1])

    const addQuestion = () => {
        let aux = question[question.length - 1] + 1
        question.push(aux)
        setQuestion([...question]) 
    }

    

    
    const createForm =() =>{

        let questions = []

        const question1 = document.querySelector('input[name="1":checked').value

    }
    

    
    return(
        <form className="CreateForm">
        <Title />
        {
        question.map(pregunta => <CardQuestion nPregunta={pregunta} key={pregunta}/> 
                                    
        )}
        <button type="button" className="PlusButton" onClick={ () => {addQuestion()}}>+</button>
        <br /><br /><br />
        <button type="submit">crear formulario</button>
        </form>
    )
}