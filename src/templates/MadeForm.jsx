import React, { useContext } from "react";
import QuestionContext from "../context/QuestionContext";
import Title from "../atoms/Title";
import CardQuestion from "../organisms/CardQuestion";
import {navigate} from 'wouter/use-location'

export default function MadeForm (){

    const {formQuestions} = useContext(QuestionContext)

    console.log(formQuestions)
    console.log(formQuestions.questions[0].question)

    return(
        <form onSubmit={ () => navigate('/')} className="MadeForm">
        <header>
            <Title text={formQuestions.title} />
        </header>
        
        {
            formQuestions.questions.map( question => {
                return (
                    <CardQuestion 
                    nPregunta={question.numberQuestion} 
                    type={question.type} 
                    text={question.question}
                    closedOptions={question.closedOptions} 
                    />
                )
            })
        }

        <button>Aceptar</button>
        </form>
        
        

    )
}