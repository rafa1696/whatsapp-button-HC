import React from "react";
import logo1 from "./logo1.png";


function Whats() {
    return (
        <div style={{position:"absolute", left: "91%", top:"94%", maxWidth:"3rem"}} className="Botao">
            <a href="https://api.whatsapp.com/send?phone=55219999999999&text=Fale%20Conosco!">
                <img src={logo1} className="Whats-logo" alt="logo">
            </img>
            </a>
        </div>
    )
}

Whats.schema = {
    title: "editor.button.title",
    description: "editor.button.description",
    type: "object",
    properties: {}
}

export default Whats;