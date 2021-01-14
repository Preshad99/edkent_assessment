import React from 'react'
import Header from '../Components/Header'
import NavigationMenu from '../Components/NavigationMenu'
import RightContainer from '../Components/RightContainer'
import style from '../CSS/Dashboard'
export default function Dashboard() {
    return (
        <div style={style.header}>
            <Header />
            <div style={style.navigationMenu}>
                <div style={style.navigationMenuWidth}>
                    <NavigationMenu />
                </div>
                <div style={style.rightContainer}>
                    <RightContainer />
                </div>

            </div>

        </div>
    )
}
