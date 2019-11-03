import React, { Component } from 'react';
import Messages from './Messages';
import HeaderModule from './HeaderModule';
import Content from './Content';
import Notification from './Notification';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      valuesToSend: {
        toNotification: 'Notification from the parent',
        toHeaderModule: 'Header Module from the parent',
        toContent: 'Content from the parent',
        toMessage: 'Message from the parent'
      },
      count: 0
    }
    this.logTheData = this.logTheData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  logTheData = (data) => {
    return data;
  }

  componentDidUpdate(){

  }

  handleClick = () => {
    let countVar = this.state.count;
    countVar = countVar + 1;
    this.setState({count: countVar})
    if(countVar>=4){
      this.setState({count: 0})
    }
  }
  
  render(){
    return(
      <div>
        {
          this.state.count===0 ? 
          <Notification getData = { this.logTheData } value = { this.state.valuesToSend.toNotification }  />
          : null  
        }

        {
          this.state.count===1 ? 
          <HeaderModule value = { this.state.valuesToSend.toHeaderModule } />
          : null  
        }

        {
          this.state.count===2 ? 
          <Content value = { this.state.valuesToSend.toContent } />
          : null  
        }

        {
          this.state.count===3 ? 
          <Messages value = { this.state.valuesToSend.toMessage } />
          : null  
        }
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default App;