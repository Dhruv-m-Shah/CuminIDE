import React, { Component } from 'react'
import {ReactTerminalStateless} from 'react-terminal-component'
import {Emulator, EmulatorState, OutputFactory, Outputs} from 'javascript-terminal'

export class TerminalView extends Component {
    constructor() {
        super();

        this.state = {
          emulatorState: EmulatorState.createEmpty(),
          inputStr: ''
        };
      }
      changeInput = (newInput) => {
        const defaultState = EmulatorState.createEmpty();
        const defaultOutputs = defaultState.getOutputs();
        let newOutputs = defaultOutputs;
        for(let i = 0; i < newInput.length; i++){
            newOutputs = Outputs.addRecord(
                newOutputs, OutputFactory.makeTextOutput(newInput[i])
              );
        }
        const newState = defaultState.setOutputs(newOutputs);
           this.setState({
               emulatorState: newState
           })
      }
    render(){
        return (
            <div>
                <ReactTerminalStateless 
                emulatorState={this.state.emulatorState}
                inputStr={this.state.inputStr}
                onInputChange={(inputStr) => this.setState({inputStr})}
                onStateChange={(emulatorState) => this.setState({emulatorState})}
                autoFocus={false}  clickToFocus={true}
                 theme={{
                    background: '#141313',
                    promptSymbolColor: '#6effe6',
                    commandColor: '#fcfcfc',
                    outputColor: '#fcfcfc',
                    errorOutputColor: '#ff89bd',
                    fontSize: '1.1rem',
                    spacing: '1%',
                    fontFamily: 'monospace',
                    width: '100%',
                    height: '50vh',
                    autoFocus: false
                    }}/>
            </div>
        );
    }
}