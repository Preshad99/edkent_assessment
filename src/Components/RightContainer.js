import { Button } from '@material-ui/core'
import React from 'react'
import style from '../CSS/RightContainer'
import AnalysisBox from '../Components/AnalysisBox'
import Graph from './Graph'
import '../CSS/chart.css'

export default function RightContainer() {
    return (
        <div style = {style.container}>
            <Button name = 'Upgrade' style = {style.button}>Upgrade</Button>
            <div>
                <AnalysisBox/>
            </div>
           <div style={{flexGrow:1}}><Graph/></div>
           <div style = {style.footer}>@ Copyright - Dummy Design 2020 All Rights Reserved</div>   
        </div> 
           
    )
}
