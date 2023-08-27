'use client'
import { headers, images } from '@/next.config';
import Image from 'next/image'
import React from "react";

//------------------------------------
//Titlecard 
//------------------------------------

export function TitleCard(props){
    console.log("Updated titlecard")
    let imgStyle = {}
    let headerStyle = {}
    let titleCardStyle = {}

    for (let i = 0; i < 3; i++){
        console.log(props.submittedCodes[i])
        if (props.submittedCodes[i] != ''){
            
            imgStyle = {display:"None"}
            headerStyle = {fontSize:"200%" }
            titleCardStyle = {paddingTop: "2%", paddingBottom: '2%'}
            break
        }
    }

    return(
        <div className='TitleCard' style={titleCardStyle}>
          {/*Logo + Title */}
          {/* <Image
            
            src={props.logo}
            alt="Rune-Tactics Logo"
            style={imgStyle}
          /> */}
          <h1 style={headerStyle}>RuneTactics</h1>
        </div>
    )

}

//------------------------------------
//Deck-Code boxes
//------------------------------------

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

//------------------------------------
//DeckBoxes
//------------------------------------

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
    console.log("ID: "+(id-1))
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
        id={"Deck"+id+"VB"}
        style={hiddenstyle}
        
        >
            <div className="DeckBox" id={"DeckBox"+id}>

            </div>
        </div>
    )
}

