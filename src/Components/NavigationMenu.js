import React from 'react'
import style from '../CSS/NavigationMenu'
import MenuOption2 from '../Components/MenuOption2'
import { FaSuitcase } from 'react-icons/fa'
import { FaDesktop } from 'react-icons/fa'
import { FaClone } from 'react-icons/fa'
import { FaBox } from 'react-icons/fa'
import { FaGem } from 'react-icons/fa'
import { FaCog } from 'react-icons/fa'
import { FaBalanceScale } from 'react-icons/fa'
import Setting from '../Components/Setting'

export default function NavigationMenu() {
    var iconList = [<FaDesktop />, <FaSuitcase />, <FaBox />, <FaBalanceScale />, <FaBox />, <FaClone />, <FaGem />]
    var dropableComponent = [false, true, true, false, false, false, false]

    return (
        <div style={style.menuHeight}>
            {
                iconList.map((item, index) => {
                    if (index === iconList.length - 1) {
                        return ([<div style={{ flexGrow: 1 }}></div>,
                        <MenuOption2 icon={item} menuName={'Menu Option ' + (index + 1)} isDropable={dropableComponent[index]} lastComponent={true} />])
                    }
                    return <MenuOption2 icon={item} firstComponent={index === 0} menuName={'Menu Option ' + (index + 1)} isDropable={dropableComponent[index]} lastComponent={false} />
                })
            }

            <Setting faSetting={<FaCog />} menuName="Setting" />
        </div>
    )
}
