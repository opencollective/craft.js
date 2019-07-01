import "reset-css";
import "./demo.scss";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import tree from "./tree";
import MessageBox from "./components/MessageBox";
import Builder from "~packages/core/Builder";
import Renderer from "~packages/core/render/Renderer";
import Canvas from "~packages/core/nodes/Canvas";
import Test from "~packages/hooks/ref.js";

const canvasTools = document.createElement("div");
canvasTools.id = `canvasTools`;
document.body.appendChild(canvasTools);

class App extends Component {
  state = {
    tree: tree,
    test: 'false',
    arr: ["hi", "bye", "what"],
    nodes: [
      <h1>Hi</h1>
    ]
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     test: 'true'
    //   })
    // }, 1000)
    // setTimeout(() => {
    //   this.setState({
    //     test: 'true'
    //   })
    //   setTimeout(() => {
    //     this.state.arr.splice(1,0, "huh");
    //     this.setState({
    //       arr: [
    //         ...this.state.arr,
    //       ]
    //     })
    //   }, 1000)
    // }, 1000)
  }
  render() {
    const { tree, test, arr } = this.state;
    return (
      <div style={{paddingTop:"30px"}}> 
        <Test />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));