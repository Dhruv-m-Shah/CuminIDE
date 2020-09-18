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
    const socket = new WebSocket('ws://localhost:9980');
    let codeSnippet = this.state.code.replace(/\s/g, "");
    console.log(codeSnippet.length);
    // Connection opened

    socket.addEventListener('open', function (event) {
        socket.send(codeSnippet.length + " " + codeSnippet);
    });
    socket.addEventListener('message', function (event) {
      console.log('Message from server ', event.data);
      socket.close();
  });

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
