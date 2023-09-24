import React, { useContext, useEffect } from "react";
import Title from "../atoms/Title";
import CardQuestion from "../molecules/CardQuestion";
import PlusButton from "../atoms/Button";
import { useState } from "react";
import QuestionContext from '../context/QuestionContext'


export default function CreateForm(){

    const [question, setQuestion] = useState([1])
    const {questions, setQuestions} = useContext(QuestionContext)

    const addQuestion = () => {
        let aux = question[question.length - 1] + 1
        question.push(aux)
        setQuestion([...question]) 
    }

    

    
    const createNewForm =() =>{

        const titleSurvey = document.querySelector('#questiontitleSurvey').value
        alert(titleSurvey)
        const questionsToMade = []
        const formQuestion = document.querySelectorAll('input[type="radio"]:checked')
       
        

        questionsToMade.push(titleSurvey)

        for (let i=0; i < formQuestion.length; i++) { 

            let auxQuestion = {}
            const currentQuestion = formQuestion[i]
            const titleQuestion = document.querySelector(`#question${i+1}`).value
            auxQuestion.question = titleQuestion
          

            switch(currentQuestion.value){
                case 'abierta':
                    auxQuestion.type = "text"
                    break;
                case 'numerica':
                    auxQuestion.type= "number"
                    
                    break;

                case 'opcion multiple':
                    auxQuestion.type = 'radio'
                    auxQuestion.ClosedOptions = []

                    const numberClosed = document.querySelector(`#question1NumberClosed`).value

                    for (let i=1; i <= numberClosed; i++){ 
                        const closedOne = document.querySelector(`#question${i}ClosedOne`).value
                        auxQuestion.ClosedOptions.push(closedOne)
                    }
                    break;
                default:
                    console.log('invalido')
                break;                    
            }

            questionsToMade.push(auxQuestion)
        }


        
        console.log(questionsToMade)
        alert(questionsToMade)
    }
    

    
    return(
        <form className="CreateForm" onSubmit={ () => createNewForm()}>
        <Title />
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