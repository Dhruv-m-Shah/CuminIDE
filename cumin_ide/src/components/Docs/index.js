import React, { Component } from 'react'
import "../Docs/style.css"

export class Docs extends Component {
    render() {
        return (
            <div className = "Content_wrapper"> 
                <h2>Cumin Documentation</h2>
                <h3>What is Cumin?</h3>
                <p>Cumin is an interpreted programming language made in C++. The lexer, parser, and interpreter were made from scratch, check out the code <a target="_blank" href = "https://github.com/Dhruv-m-Shah/Cumin">here!</a></p>
            </div>
        )
    }
}


export default Docs