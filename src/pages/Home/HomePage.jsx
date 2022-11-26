import React from "react";
import '../../css/HomePage.css';
import gradImg from '../../images/img_graduation.png'

export default function HomePage() {
    return (
        <div className="div">
            <p id="main"><span id="duksung">DUKSUNG</span><br></br>
            WOMEN'S UNIV<br></br>ANNUAL
            <span id="grad"> GRADUATION </span>EXHIBITION</p>
            <img className="gradImg" src={gradImg}></img>
        </div>
        
    )
}