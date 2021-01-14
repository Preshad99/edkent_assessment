import React, { useState } from 'react'
import style from '../CSS/MenuOption2'
import '../CSS/hover.css'
import { FaDesktop, FaPlus, FaLongArrowAltRight } from 'react-icons/fa'


export default function MenuOption2(props) {

    return (

        <div style={{ ...props.firstComponent ? style.selectedBackground : {}, ...props.lastComponent ? style.lastOption : style.option }} className="menuHover">
            <div style={style.icon}>{props.icon}</div>
            <div style={style.text}>{props.menuName}</div>
            {props.isDropable ?
                <div style={style.plusIcon}><FaPlus />
                </div> :
                <div style={style.iconPosition} className={props.lastComponent ? "" : "gotoIcon"}>
                    <FaLongArrowAltRight color="white" />
                </div>}

        </div>

    )
}
