import React, { useState } from 'react';
import '../css/Dropdown.css';

function Hamburger() {
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
        
            <ul className="menu__box">
                <li><a className="gallery" href="/works">Gallery</a></li>
                <li><a className="signin" href="/joinpage">SignIn</a></li>
            </ul>
        </div>
    );
}

export default Hamburger;