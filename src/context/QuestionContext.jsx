import React, { createContext, useState } from "react";
import '../styles/Question.css'

const Context = React.createContext({})

export function QuestionContextProvider({children}){
     
    const [question, setQuestion] = useState([1])

    return <Context.Provider value={{question, setQuestion}}>
        {children}
    </Context.Provider>

}

export default Context