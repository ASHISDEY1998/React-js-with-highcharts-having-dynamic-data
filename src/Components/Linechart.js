import React, { Component } from 'react'
import Styles from '../App.module.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class Linechart extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        clicked:"btn1",
        chartOptions: {
          chart: {
            width: 400,
            height:300 ,
            type: "line",
          },
          title: {
            text: this.props.title,
            style: { fontSize: "16px", color: "rgb(121,121,121)" },
            x: 0,
          },
          credits: {
            enabled: false,
          },
          xAxis: {
            categories: this.props.cat,
          },
          series: [
            { data: [...this.props.weekupdate] }
          ],
        }
      };
    }
    updateSeries = (updateData,btnval) => {
      this.setState({
        clicked:btnval,
        chartOptions: {
          series: [
            { data: [...updateData]}
          ]
        }
      });
    }
    
    
    render() {
      return (
      <div>
        <HighchartsReact
        highcharts={Highcharts}
        options={this.state.chartOptions}
        />
        <div className={Styles.flex_Spacearround}>
        <button onClick={()=>this.updateSeries(this.props.weekupdate,'btn1')} className={(this.state.clicked==='btn1')?Styles.btn_clicked:Styles.btn_style }>Weekly Data</button>
        <button onClick={()=>this.updateSeries(this.props.monthupdate,'btn2')} className={(this.state.clicked==='btn2')?Styles.btn_clicked:Styles.btn_style}>Monthly Data </button>
        <button onClick={()=>this.updateSeries(this.props.yearupdate,'btn3')} className={(this.state.clicked==='btn3')?Styles.btn_clicked:Styles.btn_style}>Yearly Data </button>
        </div>
      </div>
      )
    }
}
