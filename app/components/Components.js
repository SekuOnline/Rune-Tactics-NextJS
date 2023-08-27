'use client'
import Image from 'next/image'
import React from "react";

// function DeckDisplayContainer({idNum}) {
//     //Using state to maintain the value of deckCodes across pages.
//     const [deckCode, setDeckCode] = React.useState('');
    
    
    
// }

export function DeckCodeDisplay(props){
    // console.log(props.displayCodes)
    // console.log("I re-rendered(DeckCodeDisplay)")

    
    return(
        
        <div className="DeckCodeDisplay">
            <DeckCodeContainer 
            idNum={'1'}
            displayCodes = {props.displayCodes}
            handleDisplayCodeChange = {props.handleDisplayCodeChange}/>

            <DeckCodeContainer 
            idNum={'2'}
            displayCodes = {props.displayCodes}
            handleDisplayCodeChange = {props.handleDisplayCodeChange}/>

            <DeckCodeContainer 
            idNum={'3'}
            displayCodes = {props.displayCodes}
            handleDisplayCodeChange = {props.handleDisplayCodeChange}/>

            <img className={"submitButton"} src={props.submitButton.src} alt={"Submit Button"} onClick={props.handleSubmittedCodeChange}></img>
            
        </div>
    )
}   

export function DeckCodeContainer(props){
    // console.log(props.displayCodes)
    // console.log("I re-rendered (CodeContainer)")

    return (
        <div className="VerticalDisplayBox">

            <div className="DeckCodeBox">

                <input 
                    type="text" 
                    className="DeckCodeTextBox" 
                    //Not sure if this is needed, might be for URL rendering of codes
                    // defaultValue={props.displayCodes[props.idNum-1]} 
                    onChange={props.handleDisplayCodeChange} 
                    placeholder={"Deck "}
                    id={props.idNum}
                    
                    >
                </input>

            </div>
        </div>
    )
}


export function DeckBoxDisplay(props){
    // console.log("I re-rendered")
    return(
        
        <div className="DeckBoxContainer">
            <DeckBoxContainer 
                idNum = {'1'} 
                submittedCodes = {props.submittedCodes}
            />

            <DeckBoxContainer 
                idNum={'2'}
                submittedCodes = {props.submittedCodes}
            />

            <DeckBoxContainer 
                idNum={'3'}
                submittedCodes = {props.submittedCodes}            
            />


        </div>

        
    )
}

export function DeckBoxContainer(props){
    const id = props.idNum
    const deckCode = props.submittedCodes[id-1]

    //Hides the deckBoxes if there is no active deckCode
    //let hiddenstyle = {}
    let hiddenstyle = {height: '900px'}
    if (deckCode == ''){
        hiddenstyle = {display: 'none'}
    }

    return(
        <div 
        className="VerticalDisplayBox" 
        id={"Deck"+props.id+"VB"}
        style={hiddenstyle}
        
        >
            <div className="DeckBox" id={"DeckBox"+props.id}>

            </div>
        </div>
    )
}

// export default function Form() {
//     const [deckCodes, setDeckCodes] = useState({
//         codeOne : "",
//         codeTwo : "",
//         codeThree : "",
//     })

//     function codeOneChange(e) {
//         setDeckCodes({
//             ..deckCodes,

//         })
//     }
// }