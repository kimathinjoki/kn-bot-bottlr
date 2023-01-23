import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillLightningFill, BsShieldShaded } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";



function BotItem({image,name, health, damage, armor, bot_class, catchphrase, id, handleClicked}){

    return(
        <div className="col-3 p-1" >
        <div className="card border-warning h-100" name={id} onClick={()=>handleClicked(id)} key={name+id}>
            <img className="card-img-top" src={image} alt="news item" />
            <div className="card-body" >
                <h3 className="card-title">{name}</h3>
                <h4 className="card-title">{bot_class}</h4>
                <p className="card-text">{catchphrase}</p>
                <hr/>  
                <p><span> <FaHeartbeat/> {health} </span> <span> <BsFillLightningFill/> {damage}</span> <span> <BsShieldShaded/> {armor}</span></p>
                <button type="button" class="btn btn-outline-danger"> <AiOutlineDelete/> </button>
                
            </div>
        </div>
    </div>
    )
}

export default BotItem