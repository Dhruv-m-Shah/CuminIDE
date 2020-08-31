import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import React, {Component} from 'react';
import Docs1 from './components/Todos';
import "./App.css"
const code = 'const a = 0;';
class App extends Component{
  render (){
    return (
      <div className="App">
         <CodeMirror
        value={code}
        options={{
        theme: 'monokai',
        keyMap: 'sublime',
        mode: 'jsx',
      }}
    />
        <Docs1 />
      </div>
    );
  }
}


export default App;
