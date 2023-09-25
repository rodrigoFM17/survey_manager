import React, { useState } from "react";
import TitleQuestion from "../atoms/TItleQuestion";
import InputQuestion from "../atoms/InputQuestion";
import '../styles/Question.css'
import CloseQuestion from "../molecules/CloseQuestion";

export default function CardQuestion({nPregunta, text, type, closedOptions}){

            let i = 0
    
            return(
                text ? 
                <fieldset className="CardQuestion">
                    <TitleQuestion text={`pregunta ${nPregunta}`} />
                    {
                        closedOptions ? 
                        <TitleQuestion text={text} />
                        : null
                    }
                    {
                        closedOptions ?
                        closedOptions.map(
                            closedOne => {
                                return (
                                <>
                                    <InputQuestion 
                                    nPregunta={nPregunta}
                                    text={closedOne}
                                    type={type}
                                    />
                                </>
                                    
                                )
                            })
                        : 
                        <InputQuestion nPregunta={nPregunta} text={text} type={type}/>
                    }

                </fieldset>
                : 
                <fieldset className="CardQuestion">
                   
                    <InputQuestion nPregunta={nPregunta}/>
                    <TitleQuestion text={'tipo de pregunta'} />
                    <InputQuestion type={"radio"} text={'abierta'}  nPregunta={nPregunta}/>
                    <InputQuestion type={'radio'} text={'numerico'} nPregunta={nPregunta} />
                    <InputQuestion type={"radio"} text={'opcion multiple'} nPregunta={nPregunta}/>
                    <CloseQuestion nPregunta={nPregunta} />
                    
                    
                </fieldset>
                
            )

        
            

        }
       
    
