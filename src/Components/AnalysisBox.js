import React from 'react'
import style from '../CSS/AnalysisBox'
import bookSearch from '../Images/bookSearch.png'
import saveDocument from '../Images/saveDocument.png'
import documentSearch from '../Images/documentSearch.png'
import pieChart from '../Images/pieChart.png'
import security from '../Images/security.png'

var imageSrc = [pieChart,security,saveDocument,documentSearch]
var alt = ["pieChart","security","saveDocument","documentSearch"]
var values = ["245/500", "120", "125", "0"]
var title = ["ATTRIBUTE 1", "ATTRIBUTE 2","ATTRIBUTE 3","ATTRIBUTE 4"]

export default function AnalysisBox() {
    return (
        <div>
            <div style={style.analysisBox}>
                {
                    imageSrc.map((value, index) => {
                        return <div style={style.box}>
                        <div style={style.imgBg}>
                            <img src={imageSrc[index]} alt={alt[index]} style={style.image} />
                        </div>
                        <div style = {style.text}>
                            <div style = {style.mainText}>{values[index]}</div>
                            <div style = {style.subText}>{title[index]}</div>
                        </div>
                    </div>
                    })
                }             
            </div>
        </div>
    )
}
