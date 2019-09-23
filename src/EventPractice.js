import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
    username: '',
  };

  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleChange = (e) => {
    this.setState({
      // message: e.target.value,
      [e.target.name]: e.target.value,
    });
  }

  handleClick = () => {
    // alert(this.state.message);
    alert(this.state.username + ':' + this.state.message);
    this.setState({
      message: '',
      username: '',
    });
  }

  handleKeyPress = e => {
    if(e.key === 'Enter') {
      this.handleClick();
    }
  }
  
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input 
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <input
          type="text" 
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>
          확인버튼
        </button>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <h1>이벤트 연습</h1>
  //       <input
  //         type="text"
  //         name="message"
  //         placeholder="아무거나 입력하세요."
  //         value={this.state.message}
  //         onChange={
  //           e => {
  //             this.setState({
  //               message: e.target.value
  //             })
  //           }
  //         }
  //       />
  //       <button onClick={
  //         () => {
  //           // 입력된 값 state에 저장됐는지 확인.
  //           alert(this.state.message);
  //           // 공백만들기
  //           this.setState({
  //             message: ''
  //           });
  //         }
  //       }>
  //         확인
  //       </button>
  //     </div>
  //   );
  // }
}

export default EventPractice;
