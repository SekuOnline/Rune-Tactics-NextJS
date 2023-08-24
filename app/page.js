"use client"
import Image from 'next/image'
import {useState} from "react";

// import styles from './page.module.css'
import  * as components from "@/app/components/Components.js"
import logo from "../assets/Logo-Filled.png"
export default function Home() {

  // States for deck codes
  const [deckCodes, setDeckCodes] = useState({
    
    // displayCodes   : text fields that are updated onChange
    // submittedCodes : effective codes submitted by button press

    // Codes correspond to their index+1 (1-3)
    displayCodes : ["a", "b", "c"],
    submittedCodes : ["", "", ""],
  })

  function handleDisplayCodeChange(e){
  //  
    let newCodes = deckCodes
    newCodes.displayCodes[e.target.id-1] = e.target.value
    setDeckCodes(newCodes)
    console.log("Changed state of " + e.target.id)
  }


  return (
    <div>
        {/* <Header/> */}
        
        <div className='TitleCard'>
          {/*Logo + Title */}
          <Image
            height={150}
            width={150}
            src={logo}
            alt="Rune-Tactics Logo"
          />
          <h1>RuneTactics</h1>
        </div>
        
        
        <components.DeckCodeDisplay
          displayCodes = {deckCodes.displayCodes}
          handleDisplayCodeChange = {handleDisplayCodeChange}

        />

        {/* <components.DeckBoxDisplay/> */}
        


        {/* <button onClick={}>TestButton</button> */}
    </div>

  )
}





function submitCodes(code1, code2, code3){

}