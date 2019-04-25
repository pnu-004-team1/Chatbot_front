import React, { Component } from 'react';
import './common/css/common.css'
class App extends Component {

  id = 3;
  state = {
    input: '',
    messages: [
      { id: 0, text: ' 안녕', from: 'me' },
      { id: 1, text: ' 하이2', from: 'me' },
      { id: 2, text: ' 헬루', from: 'other' },
    ]
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
      
  }
  handleCreate = () => {
    const { input, messages } = this.state;
    this.setState({
      input: '', // 인풋 비우고 concat을 사용하여 배열에 추가
      messages: messages.concat({
        id: this.id++,
        text: input,
        from: 'me'
      })
    });
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }
  render() {
    const { input, messages } = this.state
    const { handleKeyPress, handleChange } = this
    const messageList = messages.map(
      ({id, text, from}) => (
        <div className={from}>
          {text}
        </div>
      )
    )
    
    return (
      <React.Fragment>
        <div className="main">
          <div className="chat">
            {messageList}
          </div>
          <div className="form">
            <input
              type="text"
              id="test"
              placeholder="message.."
              value={input}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
            />
            <button onclick="send()">Submit</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
