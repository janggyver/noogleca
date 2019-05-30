import React, {Component} from 'react';
import logo from './logo.svg';

import NoogleApp from './components/noogleca/NoogleApp';
import './App.css';
import './bootstrap.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <NoogleApp />
      </div>
    );
  }
}


export default App;
