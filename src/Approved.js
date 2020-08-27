import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Blocks from "./Blocks";

class Approved extends Component {
  constructor(props) {
    super(props);
    this.state = { showBlock: false }
  }
  toggleBlockDisplay() {
    this.setState({ showBlock: !this.state.showBlock })
  }
  render() {
    return (
      <div className="App">
        <ul className="liststyle">
          <li><button className="btn btn-link" onClick={this.toggleBlockDisplay.bind(this)}>Test Shipment1</button></li>
        </ul>
        {this.state.showBlock ? <Blocks /> : null}
      </div>
    )
  }
}

export default Approved;
