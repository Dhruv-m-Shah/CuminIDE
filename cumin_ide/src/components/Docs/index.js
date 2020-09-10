import { UnControlled as CodeMirror } from "react-codemirror2";
import React, { Component } from "react";
import "../Docs/style.css";
import CodeMirrorLib from "codemirror";
import { cuminDetector } from "../ide/cuminDetector";
CodeMirrorLib.defineMode("yourMode", cuminDetector);
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
export class Docs extends Component {
  render() {
    return (
      <div className="Content_wrapper">
        <h2>Cumin Documentation</h2>
        <h5>What is Cumin?</h5>
        <p>
          Cumin is an interpreted programming language made in C++. The lexer,
          parser, and interpreter were made from scratch, check out the code{" "}
          <a target="_blank" href="https://github.com/Dhruv-m-Shah/Cumin">
            here!
          </a>
        </p>
        <h5>Basics of Cumin</h5>
        <p>
          The main entry point for a cumin application is indicated by the{" "}
          <code className = "qualifier">start</code> keyword and the end is indicating with the{" "}
          <code className = "qualifier">end</code> keyword. It should look something like this:
        </p>
        <CodeMirror
          className="CodeMirror"
          value =" start 
          // ENTER CODE HERE
        end"
          options={{
            defineMode: { name: "cumin", fn: cuminDetector() },
            theme: "material",
            lineNumbers: true,
            readOnly: "nocursor"
          }}
          onChange={(editor, data, value) => {
            this.setState({ code: value });
            console.log(this.state.code);
          }}
        />
        <h5>Variable Assignment</h5>
        <p>Variables in Cumin must be assigned to some value and the type of variable must be declared. Here are some examples: </p>
        <CodeMirror
          className="CodeMirror "
          value =' num x = 123?
          str y = "Hello World!"?
          flo z = 3.1415?'
          options={{
            defineMode: { name: "cumin", fn: cuminDetector() },
            theme: "material",
            lineNumbers: true,
            readOnly: "nocursor"
          }}
          onChange={(editor, data, value) => {
            this.setState({ code: value });
            console.log(this.state.code);
          }}
        />
      </div>
    );
  }
}

export default Docs;
