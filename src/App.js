import React, { Component, Fragment } from 'react';
import './common/css/common.css'
import $ from 'jquery'

class App extends Component {

  id = 3;
  state = {
    input: '',
    messages: [
      { id: 0, text: ' 안녕', from: 'me', date: '10:12' },
      { id: 1, text: ' 하이2', from: 'me', date: '10:15' },
      { id: 2, text: ' 헬루', from: 'bot', date: '10:17' },
    ]
  }

  componentDidMount() {
    $(document).ready(function() {
    
      $('#send-message').click(function() {
        var messageTXT = $(".sendText").val();
        if($(".sendText").val()){
          //Scroll
          var chat = $('.chatContent');
          var chatItems = $('.chat-column').length;
          chat.animate({scrollTop: (chat.prop('scrollHeight') * chatItems)});
        }
      });
      $('.sendText').keypress(function(e){
        if(e.which == 13){
          $('#send-message').click();
        }
      });

    });
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }
  handleCreate = () => {
    const { input, messages } = this.state;
    if (input === '') return

    this.setState({
      input: '', // 인풋 비우고 concat을 사용하여 배열에 추가
      messages: messages.concat({
        id: this.id++,
        text: input,
        from: 'me',
        date: getTimeStamp()
      })
    });
    var chat = document.getElementsByClassName("chatContent")[0]
    if (chat != null){
      // objDiv[0].animate(scrollTop)
      // console.log(chat.scrollHeight)
      // chat.animate({scrollTop: (chat.childNodes[0].scrollHeight * chat.childNodes.length)});
    }
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }
  render() {
    const { input, messages } = this.state
    const { handleKeyPress, handleChange, handleCreate } = this
    const messageList = messages.map(
      ({id, text, from, date}) => (
        <div className={`chat-column ${from}`} key={id}>
          <div className="item">
            <div className="chat-icon">{from}</div>
          </div>
          <div className="item">
            <div className="chat-message">{text}</div>
            <div className="message-date">{date}</div>
          </div>
        </div>
      )
    )
    
    return (
      <Fragment>
        <div className="container">
          {/* <!-- BEGIN : chatHeader --> */}
          <div className="chatHeader">
            <a href="#" className="BackBtn"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
            <div className="headerTitle">
              <div className="NameIcon">SA</div>
              <div className="Txt">
                <div>PNU Chatbot</div>
                <div>무엇이든 물어보세요!</div>
              </div>
            </div>
          </div>
          {/* <!-- END : chatHeader --> */}


          {/* <!-- BEGIN : chatContent --> */}
          <div className="chatContent">
            {messageList}
          </div>
          {/* <!-- END : chatContent --> */}
          <div class="chatSend">
            <input
              type="text"
              className="sendText"
              placeholder="message.."
              value={input}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
            />
            <div id="send-message" onClick={handleCreate}>
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;

function getTimeStamp() {
  var d = new Date();
  var s =
    // leadingZeros(d.getFullYear(), 4) + '.' +
    // leadingZeros(d.getMonth() + 1, 2) + '.' +
    // leadingZeros(d.getDate(), 2) + '.' +

    leadingZeros(d.getHours(), 2) + ':' +
    leadingZeros(d.getMinutes(), 2);

  return s;
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (let i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}