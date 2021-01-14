import React from 'react';
import DateTimeRangeContainer from 'react-advanced-datetimerange-picker'
import {FormControl} from 'react-bootstrap'
import moment from "moment"
import '../CSS/dateTimePicker.css';

function getDate(dateInput) {
    console.log(dateInput);
    var dateVar = dateInput.toDate();
    console.log(dateVar);
    var dayString = ['Sun', 'Mon', 'Tue','Wed','Thu','Fri','Sat']
    var monthString = ['Jan', 'Feb', 'Mar','Apr', 'May','Jun','Jul','Aug', 'Sep', 'Oct','Nov','Dec']
    console.log(dateVar.getDay());
    console.log(dateVar.getMonth());
    console.log(dateVar.getDate());
    console.log(dateVar.getFullYear());
    console.log(dayString[dateVar.getDay()]);
    console.log(monthString[dateVar.getMonth()]);
    console.log(dateVar.getDate());
    console.log(dateVar.getFullYear());
    return dayString[dateVar.getDay()] + ", " + monthString[dateVar.getMonth()] + " " + dateVar.getDate() +", " + dateVar.getFullYear();
}

export default class Wrapper extends React.Component {

    constructor(props){
        super(props);
        let now = new Date();
        let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0,0,0,0));
        let end = moment(start).add(1, "days").subtract(1, "seconds");
        this.state = {
            start : start,
            end : end
        }

        this.applyCallback = this.applyCallback.bind(this);
    }

    

    applyCallback(startDate, endDate){
        this.setState({
                start: startDate,
                end : endDate
            }
        )
    }

    render(){
            let now = new Date();
            let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0,0,0,0));
            let end = moment(start).add(1, "days").subtract(1, "seconds");
            let ranges = {
                "Today": [moment(start), moment(end)],
                "Yesterday": [moment(start).subtract(1, "days"), moment(end).subtract(1, "days")],
                "Last 7 Days": [moment(start).subtract(7, "days"), moment(end)],
                "Last Week": [moment(start).subtract(7, "days"), moment(end)],
                "Last 2 weeks": [moment(start).subtract(15, "days"), moment(end)],
                "This Month" : [moment(new Date(now.getFullYear(), now.getMonth(), 1)),moment(new Date(now.getFullYear(), now.getMonth() + 1, 0)) ],
                "Last Month" : [moment(new Date(now.getFullYear(), now.getMonth(), 1)).subtract(1,"month"),moment(new Date(now.getFullYear(), now.getMonth() + 1, 0)).subtract(1,"month") ]
            }
            let local = {
                "format":"DD-MM-YYYY",
                "sundayFirst" : false
            }
            
            return(
                <div>
                    <DateTimeRangeContainer
                        ranges={ranges}
                        start={this.state.start}
                        end={this.state.end}
                        local={local}
                        min
                        leftMode={true}
                        noMobileMode={true}
                        applyCallback={this.applyCallback}
                    >    
                        <FormControl
                        style={{width:'fit-content', padding:8, minWidth:250,border:'0.5px solid #d3d3d3',marginTop:'1vh', cursor:'pointer'}} 
                        id="formControlsTextB"
                        type="text"
                        label="text"
                        value={ getDate(this.state.start)+"-"+getDate(this.state.end) + "  📆" }
                        placeholder="Enter text"
                        /> 
                    </DateTimeRangeContainer>
                </div>
            );
        }
}