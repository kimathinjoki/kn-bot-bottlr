import React, {useEffect, useState} from "react";
import SelectedBot from "./SelectedBot";

const request_url = "http://localhost:3000/bots"


function YourBotArmy({botId, bots}){

    const [botSelect, setBotSelect] = useState([])

    const theSelectedArmy = bots.filter((bot)=>{
        for(let i=0 ; i< botId.length; i++ ){
            if(bot.id=== botId[i]){
                return bot
        }
        }
    }
    
        // return botId.map((id)=>bots.id===id)
    )

    console.log(theSelectedArmy)
    console.log(botId)

    // setBotSelect(theSelectedArmy)




    console.log(botSelect)


    const theeBots = theSelectedArmy.map((content,index)=><SelectedBot image={content.avatar_url} name={content.name} health={content.health} damage={content.damage} armor={content.armor} bot_class={content.bot_class} catchphrase={content.catchphrase}  key={content.name+index} id={content.id} />)



    return(
        <div>
            {/* {theeBots} */}
            <div>
            <div className="container  mt-4" id="selection">
                
            <div className="row border border-success">
                <center><h2 style={{color:"white"}}>Selected Bot Army</h2></center>
            
                {theeBots}

            </div>
        </div>
            </div>
        </div>
    )

}

export default YourBotArmy