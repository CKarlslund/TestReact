import React from 'react';
import './App.css';
import Tabs from './components/tabs'
import { Button } from 'reactstrap';
import Form from './components/form'

class App extends React.Component {
  state = {
    tabs: []
  }

  componentDidMount() {
    fetch('https://testwebapi666.azurewebsites.net/tabs')
    .then(res => res.json())
    .then((data) => {
      this.setState({ tabs: data })
    })
    .catch(console.log)
  }

  render () {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <Tabs tabs={this.state.tabs} />
          </div>
        </div>
        <div class="row">         
          <div class="col-md-5">
            <Form></Form> 
          </div>       
        </div>
      </div>
    );
  }
}



export default App;
