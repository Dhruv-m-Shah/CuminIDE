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
          The main entry point for a Cumin application is indicated by the{" "}
          <code className="qualifier">start</code> keyword and the end is
          indicating with the <code className="qualifier">end</code> keyword. It
          should look something like this:
        </p>
        <CodeMirror
          className="CodeMirror"
          value=" start 
          [ENTER CODE HERE (Comments can be inserted within square brackets like this!)]
        end"
          options={{
            defineMode: { name: "cumin", fn: cuminDetector() },
            theme: "material",
            lineNumbers: true,
            readOnly: "nocursor",
          }}
          onChange={(editor, data, value) => {
            this.setState({ code: value });
            console.log(this.state.code);
          }}
        />
        <h5>Variable Assignment</h5>
        <p>
          Variables in Cumin must be assigned to some value and the type of
          variable must be declared. Here are some examples:{" "}
        </p>
        <CodeMirror
          className="CodeMirror "
          value=' num x = 123?
          str y = "Hello World!"?
          flo z = 3.1415?'
          options={{
            defineMode: { name: "cumin", fn: cuminDetector() },
            theme: "material",
            lineNumbers: true,
            readOnly: "nocursor",
          }}
          onChange={(editor, data, value) => {
            this.setState({ code: value });
            console.log(this.state.code);
          }}
        />
        <h5>Statements</h5>
        <p>
          Notice something funny in the previous code snippet? Each variable
          assignment ended in a question mark (?).
        </p>
        <h5>Operators</h5>
        <p>
          Cumin currently supports the four basic arithmetic operators addition
          (+), subtraction (-), multiplication (*), and division (/). Brackets
          can be used to implement order of operation rules
        </p>
        <CodeMirror
          className="CodeMirror "
          value=" num x = (123 + 23) * 4 / 2?  [x = 292]
          num y = 123 + 5 - 4*5? [y = 108]
          flo z = 3.1415 - 3.14*2? [-3.1385]"
          options={{
            defineMode: { name: "cumin", fn: cuminDetector() },
            theme: "material",
            lineNumbers: true,
            readOnly: "nocursor",
          }}
          onChange={(editor, data, value) => {
            this.setState({ code: value });
            console.log(this.state.code);
          }}
        />
        <h5>Order of Operations - Precedence Table</h5>
        <p>Operations that have the same precedence are prioritized based on the operation that appears leftmost in the statement. Statements are given a higher priority if they are surrounded with brackets.</p>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Precedence</th>
              <th scope="col">Operator</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>* (multiplication)</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>/ (division)</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td colspan="2">+ (addition)</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td colspan="2">- (subtraction)</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Docs;
