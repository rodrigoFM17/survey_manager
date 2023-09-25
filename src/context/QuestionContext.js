import React, { createContext, useState } from "react";

const QuestionContext = createContext([])

export function QuestionContextProvider({children}){

    const [formQuestions, setQuestions] = useState({ title : '', questions : []})

    return <QuestionContext.Provider value={{formQuestions, setQuestions} }>
        {children}
    </QuestionContext.Provider>

}

export default QuestionContext