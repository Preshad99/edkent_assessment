import React,{useState} from 'react'
import style1 from '../CSS/Settings'
import '../CSS/hover.css'

export default function Setting(props) {
    
    return (
        <div style = {{...style1.option1,...style1.selectedBackground}} >
            <div style={style1.icon}>{props.faSetting}</div>
            <div style = {style1.text}> {props.menuName}</div>     
        </div>
    );
}

