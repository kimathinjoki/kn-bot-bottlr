import React, {useEffect, useState} from "react";
import SelectedBot from "./SelectedBot";

const request_url = "http://localhost:3000/bots"


function YourBotArmy({botId}){

    const [botSelect, setBotSelect] = useState([])
    const [allBots,setAllBots] = useState([])


    useEffect(()=>{
        fetch(request_url)
        .then(r => r.json())
        .then(data=>{
            setAllBots(data)
            console.log(data)
            // setBotSelect(allBots.filter((allBots)=>{
            //     if(allBots.id === botId)return allBots;
            // }))
            // console.log(botSelect)

        })

    },[])

    const theSelectedArmy = allBots.filter((bots)=>bots.id===botId
        // return botId.map((id)=>bots.id===id)
    )

    console.log(theSelectedArmy)
    console.log(botId)

    // setBotSelect(theSelectedArmy)




    console.log(botSelect)


    const theeBots = botSelect.map((content,index)=><SelectedBot image={content.avatar_url} name={content.name} health={content.health} damage={content.damage} armor={content.armor} bot_class={content.bot_class} catchphrase={content.catchphrase}  key={content.name+index} id={content.id} />)



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