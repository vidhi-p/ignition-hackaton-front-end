import React, {Component} from 'react';
import '../style/App.css';
import Form from '../components/Form';

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
         <Form onChange={fields => this.onChange(fields)}/>
         <p>
           {JSON.stringify(this.state.fields, null, 2)}
         </p>
       </div>
    );
  }
}

export default App;
