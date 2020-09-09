import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Cumin Online IDE</span>
                    <button onClick = {this.props.runCode}type="button" className="btn btn-outline-dark">Run Code</button>
                </nav>
            </div>
        )
    }
}

export default NavBar
