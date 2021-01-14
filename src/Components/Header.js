import React from 'react';
import logo from '../Images/logo.png';
import image from '../Images/person.jpg';
import style1 from '../CSS/HeaderCSS';
import {FaCaretDown} from 'react-icons/fa'
export default function Header() {

    return (
        <header style={style1.headerBorder}>

            <div style={style1.headerLogo}>
                <img src={logo} alt="logo" style={style1.logo} onClick={()=>{window.location.href="/"}} />
                <div style={style1.imageLogo}>
                
                    <img src={image} alt="image" style={style1.image} />
                    <div style={style1.direction}>
                        <div style = {style1.text}>Anthony Johnson</div>
                        <div style = {style1.lightText}>Dummy Design.com</div>
                    </div>
                    <div style={style1.directionArrow}><FaCaretDown/></div>
                </div>
               
            </div>
        </header>
    );
}
