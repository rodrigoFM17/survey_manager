import React, { useContext, useEffect } from "react";
import Title from "../atoms/Title";
import CardQuestion from "../organisms/CardQuestion";
import { navigate } from 'wouter/use-location'
import { useState } from "react";
import QuestionContext from "../context/QuestionContext";




export default function CreateForm(){

    const [question, setQuestion] = useState([1])
    const {formQuestions, setQuestions} = useContext(QuestionContext)

    const addQuestion = () => {
        let aux = question[question.length - 1] + 1
        question.push(aux)
        setQuestion([...question]) 
    }

    

    
    const createNewForm =(e) =>{
        e.preventDefault()
        const titleSurvey = document.querySelector('#questiontitleSurvey').value
        const formQuestion = document.querySelectorAll('input[type="radio"]:checked')
        formQuestions.questions = []
        formQuestions.title = titleSurvey

        for (let i=0; i < formQuestion.length; i++) { 

            let auxQuestion = {}
            const currentQuestion = formQuestion[i]
            const titleQuestion = document.querySelector(`#question${i+1}`).value
            auxQuestion.question = titleQuestion
            auxQuestion.numberQuestion = i + 1 
          

            switch(currentQuestion.value){
                case 'abierta':
                    auxQuestion.type = "text"
                    break;
                case 'numerico':
                    auxQuestion.type= "number"
                    break;

                case 'opcion multiple':
                    auxQuestion.type = 'radio'
                    auxQuestion.closedOptions = []

                    const numberClosed = document.querySelector(`#question${i+1}NumberClosed`).value

                    for (let i=1; i <= numberClosed; i++){ 
                        const closedOne = document.querySelector(`#question${i}ClosedOne`).value
                        auxQuestion.closedOptions.push(closedOne)
                    }
                    break;
                default:
                    console.log('invalido')
                break;                    
            }

            formQuestions.questions.push(auxQuestion)
        }
        
        setQuestions(formQuestions)
        console.log(formQuestions)
        navigate('/Form')
    }
    
    
    return(
        <form className="CreateForm" onSubmit={createNewForm}>
        <header>
            <Title />
        </header>
        
        
        {
        question.map(pregunta => <CardQuestion nPregunta={pregunta} key={pregunta}/> 
                                    
        )}
        
        <div className="ContainerButtons">
            <button type="button" className="PlusButton" onClick={ () => {addQuestion()}}>+</button>
            <button type="submit" >Aceptar</button>
        </div>
        
        </form>
    )
}