import React, { useState } from 'react';
import '../css/Dropdown.css';

function Hamburger() {
    return (
        <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
                <span></span>
            </label>
        
            <ul class="menu__box">
                <li><a class="gallery" href="/works">Gallery</a></li>
                <li><a class="signin" href="/joinpage">SignIn</a></li>
            </ul>
        </div>
    );
}

export default Hamburger;