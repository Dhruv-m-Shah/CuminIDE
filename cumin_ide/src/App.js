import { UnControlled as CodeMirror } from "react-codemirror2";
import React, { Component } from "react";
import NavBar from "./components/Navbar/index";
import Docs from "./components/Docs/index";
import { cuminDetector } from "./components/ide/cuminDetector";
import "./App.css";
import CodeMirrorLib from "codemirror";
CodeMirrorLib.defineMode("yourMode", cuminDetector);
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { code: "" };
  }
  runCode = () => {
    var request = new XMLHttpRequest();
    request.open("GET", "http://localhost:9090");
    console.log(this.state.code);
    request.setRequestHeader("test", this.state.code);
    request.send();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        window.location.href = "submitted.html";
        console.log(request.responseText);
      } else {
        console.log(request.responseText);
      }
    };
  };
  render() {
    return (
      <div className="wrapper">
        <NavBar runCode={this.runCode}></NavBar>
        <div className="ide">
          <CodeMirror
            className="CodeMirror"
            options={{
              defineMode: { name: "cumin", fn: cuminDetector() },
              theme: "material",
              lineNumbers: true,
            }}
            onChange={(editor, data, value) => {
              this.setState({ code: value });
              console.log(this.state.code);
            }}
          />
        </div>
        <div className="docs">
          <Docs></Docs>
        </div>
      </div>
    );
  }
}

export default App;
