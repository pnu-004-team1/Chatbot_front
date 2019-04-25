import React, { Component } from 'react';
import './common/css/common.css'
class App extends Component {

  id = 3;
  state = {
    input: '',
    message: [
      { id: 0, text: ' 안녕', checked: false },
      { id: 1, text: ' 하이2', checked: true },
      { id: 2, text: ' 헬루', checked: false }
    ]
  }

  render() {
    const { input, message } = this.state;
    const messageList = message.map(
      ({id, text, checked}) => (
        <div className="me">
          {text}  
        </div>
      )
    )
    
    return (
      <div>
        <div id="main">
          <div id="chat">
            {messageList}
          </div>
          <div>
            <input type="text" id="test" placeholder="message.." onkeypress="JavaScript:press()"/>
            <button onclick="send()">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
