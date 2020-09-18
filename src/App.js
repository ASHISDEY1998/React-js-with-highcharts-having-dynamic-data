import React, { Component } from "react";
import Linechart from "./Components/Linechart";
import Styles from "./App.module.css";

export default class App extends Component {
  state = {
    linecharts: [],
  };
  componentDidMount() {
    fetch("./data.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          linecharts: result.linecharts,
        });
      });
  }

  render() {
    return (
      <div>
        <h1 className={Styles.header}>Some Random line Charts</h1>
        <div className={Styles.flex_Spacearround}>
          {this.state.linecharts.map((graph, i) => {
            return (
              <Linechart
                key={graph.id}
                cat={graph.catagories}
                title={graph.title}
                weekupdate={graph.week_data}
                monthupdate={graph.month_data}
                yearupdate={graph.year_data}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
