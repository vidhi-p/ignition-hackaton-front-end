import React, {Component} from 'react';
import './App.css';
import Form from './components/Form';
import Navigation from './components/Navigation';
import Recents from './components/Recents';
import Favourites from './components/Favourites';
import Branch from './components/Branch_Resouces';

class App extends Component {
  state = {
    fields: {},
  };
  onChange = updatedValue => {
    this.setState({
       fields: {
        ...this.state.fields,
        ...updatedValue // '...' means unpacking and only updating new values
      }
    });
  }
  render() {
    return (
       <div className='App'>
         <Navigation/>
         <br/>
         <Branch />
         <br/>
         <Recents/>
         <br/>
         <Favourites />
       </div>
    );
  }
}

export default App;
