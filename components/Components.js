function DeckDisplayContainer({idNum}) {
    return (
        <div className="VerticalDisplayBox">
            <div className="DeckCodeBox">
                <input type="text" className="DeckCodeTextBox" id={"DeckCode"+idNum} placeholder={"Deck "+idNum}></input>
            </div>
        </div>
    )
}

export function DeckBoxes(){
    return(
        
        <div className="DeckBoxContainer">
            <link rel='stylesheet' href="home.css"></link>
            <DeckDisplayContainer idNum={'1'}/>
            <DeckDisplayContainer idNum={'2'}/>
            <DeckDisplayContainer idNum={'3'}/>
        </div>
    )
}   

