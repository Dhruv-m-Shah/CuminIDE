import { UnControlled as CodeMirror } from "react-codemirror2";
import React, { Component } from "react";
import NavBar from "./components/Navbar/index";
import {cuminDetector} from "./components/ide/cuminDetector"
import "./App.css";
import CodeMirrorLib from 'codemirror';
CodeMirrorLib.defineMode('yourMode', cuminDetector);
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <NavBar></NavBar>
        <div className="ide">
          < CodeMirror className = "CodeMirror"
            options={{
              defineMode: {name: "cumin", fn: cuminDetector()},
              theme: "material",
              lineNumbers: true,
            }}
            onChange={(editor, data, value) => {
              console.log(value);
            }}
          />
          <div className="docs"></div>
        </div>
      </div>
    );
  }
}

export default App;
