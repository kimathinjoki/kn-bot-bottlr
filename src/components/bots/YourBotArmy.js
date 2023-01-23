import React, {useState} from "react";
import SelectedBot from "./SelectedBot";

function YourBotArmy({botId, bots}){

    const [deletedBotId, setDeletedBotId] = useState([])


    // to filter the clicked bot and the  bot list 

    const theSelectedArmy = bots.filter((bot)=>{
        for(let i=0 ; i< botId.length; i++ ){
            if(bot.id=== botId[i]){
                return bot
        }
        }
    }
    
    )


    //functon to get the ids of the selected to be removed bots in the selected army
    function handleDelete(input){
        setDeletedBotId(input)
    }


    console.log(theSelectedArmy)
    console.log(botId)

    //iterates through the filtered an added bot items and appends the details to a bot card
    const theeBots = theSelectedArmy.map((content,index)=><SelectedBot image={content.avatar_url} name={content.name} health={content.health} damage={content.damage} armor={content.armor} bot_class={content.bot_class} catchphrase={content.catchphrase}  key={content.name+index} id={content.id} handleDelete={handleDelete}/>)



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