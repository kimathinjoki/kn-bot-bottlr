import React, { useEffect, useState } from "react";
import BotItem from "./BotItem";
import YourBotArmy from "./YourBotArmy";


const url="http://localhost:3000/bots"

function BotCollection(){

    const [bots, setBots] = useState([])

    useEffect(()=>{
        fetch(url)
        .then(r => r.json())
        .then(data =>{
            console.log(data)
            setBots(data)
        })

    },[])

    const [botSelect, setBotSelect] = useState([])

    function handleClick(e){
        setBotSelect(newBots=>[...botSelect,])

    }

    const botContent= bots.map((content,index)=><BotItem image={content.avatar_url} name={content.name} health={content.health} damage={content.damage} armor={content.armor} bot_class={content.bot_class} catchphrase={content.catchphrase}  key={content.name+index} id={content.id} />)

    return(
        <div>
            <YourBotArmy handleClick ={handleClick}/>1
        <div className="container mt-4">
            <div className="row">
                {botContent}

            </div>
        </div>
        </div>
    )



}

export default BotCollection