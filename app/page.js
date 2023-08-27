"use client"
import Image from 'next/image'
import {useState} from "react";

// import styles from './page.module.css'
import  * as components from "@/app/components/Components.js"
import logo from "../assets/Logo-Filled.png"
import submitButton from "../assets/SubmitButton1.png"


export default function Home() {
  

  // States for deck codes
  const [deckCodes, setDeckCodes] = useState({
    
    // displayCodes   : text fields that are updated onChange
    // submittedCodes : effective codes submitted by button press

    // Codes correspond to their index+1 (1-3)
    displayCodes : ["", "", ""],
    submittedCodes : ["", "", ""],
   
  })

  // console.log("I rerendered(Parent)")

  function handleDisplayCodeChange(e){
  //  
     let newCodes = {...deckCodes}
     newCodes.displayCodes[e.target.id-1] = e.target.value
    setDeckCodes(newCodes)
    // console.log("Changed state of " + e.target.id)
    // console.log(deckCodes.displayCodes)
  }

  function handleSubmittedCodeChange(e){
    // console.log("Before: "+deckCodes.submittedCodes)
    let newCodes = {...deckCodes}
    for (let i = 0; i < 4; i++){
      newCodes.submittedCodes[i] = newCodes.displayCodes[i]
    }
    setDeckCodes(newCodes)
    // console.log("After: "+ deckCodes.submittedCodes)
  }


  return (
    <div>
        {/* <Header/> */}
        <components.TitleCard 
          submittedCodes = {deckCodes.submittedCodes}
          logo = {logo}
        />
        
        
        
        <components.DeckCodeDisplay
          displayCodes = {deckCodes.displayCodes}
          handleDisplayCodeChange = {handleDisplayCodeChange}
          handleSubmittedCodeChange = {handleSubmittedCodeChange}
          submitButton = {submitButton}


        />

        <components.DeckBoxDisplay
          submittedCodes = {deckCodes.submittedCodes}
          // handleSubmittedCodeChange = {handleSubmittedCodeChange}
        />
        


        
    </div>

  )
}
