import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Shape from "./Shape";

export class Selector extends Component {
  constructor(){
    super();
    this.state = {
      selectedShape: 'square',
    }
  }
  selectShape = (shapeName)=>{
    this.setState({
      selectedShape: shapeName
    })
  }
  render(){
    return (
      <div className="container">
        <div className="navbar">
          <div>Selected: <span>{this.state.selectedShape}</span></div>

        </div>
        <div className="shape-list">
        <Shape shape="square" selectShape={this.selectShape}/>
        <Shape shape="circle" selectShape={this.selectShape}/>
        <Shape shape="triangle" selectShape={this.selectShape}/>
        <Shape shape="star" selectShape={this.selectShape} />
        <Shape shape="oval" selectShape={this.selectShape}/>

        </div>
      </div>
    );
  }
}
