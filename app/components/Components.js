'use client'
import React from "react";

// function DeckDisplayContainer({idNum}) {
//     //Using state to maintain the value of deckCodes across pages.
//     const [deckCode, setDeckCode] = React.useState('');
    
    
    
// }

export function DeckCodeDisplay(props){
    // console.log(props.displayCodes)
    
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
        </div>
    )
}   

export function DeckCodeContainer(props){
    // console.log(props.displayCodes)
    return (
        <div className="VerticalDisplayBox">

            <div className="DeckCodeBox">

                <input 
                    type="text" 
                    className="DeckCodeTextBox" 
                    defaultValue={props.displayCodes[props.idNum-1]} 
                    onChange={props.handleDisplayCodeChange} 
                    placeholder={"Deck "}
                    id={props.idNum}
                    
                    >
                </input>

            </div>
        </div>
    )
}


export function DeckBoxDisplay(){
    return(
        <div className="DeckBoxContainer">
            <DeckBoxContainer idNum={'1'}/>
            <DeckBoxContainer idNum={'2'}/>
            <DeckBoxContainer idNum={'3'}/>
        </div>
    )
}

// export function DeckBoxContainer({idNum}){

//     //State for deck-codes
//     const [deckCode, setDeckCode] = React.useState('')
    
//     //Hides the deckBoxes if there is no active deckCode
//     //let hiddenstyle = {}
//     let hiddenstyle = {height: '300px'}

//     if (deckCode == ''){
//         hiddenstyle = {display: 'none'}
//     }

//     return(
//         <div 
//         className="VerticalDisplayBox" 
//         id={"Deck"+idNum+"VB"}
//         style={hiddenstyle}
        
//         >
//             <div className="DeckBox" id={"DeckBox"+idNum}>

//             </div>
//         </div>
//     )
// }

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