import React, { useContext } from "react";
import QuestionContext from "../context/QuestionContext";



export default function PlusButton(){

    const {question, setQuestion} = useContext(QuestionContext)

    function addQuestion(){
        
        let aux = question[question.length -1]  
        aux++
        setQuestion(aux)
    }

    return(
        <button className="PlusButton" >+</button>
    )
}