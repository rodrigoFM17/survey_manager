import React, { useContext } from "react";
import QuestionContext from "../context/QuestionContext";



export default function PlusButton({text, type}){

    return(
        <button type={`${type}`} >{text}</button>
    )
}