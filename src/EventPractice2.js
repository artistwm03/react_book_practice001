import React, { useState} from 'react';

const EventPractice2 = () => {
  // const [username, setUsername] = useState('');
  // const [message, setMessage]   = useState('');
  // const onChangeUsername = e => setUsername(e.target.value);
  // const onChangeMessage  = e => setMessage(e.target.value);

  const [ form, setForm ] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  }

  const onClick = () => {
    alert(username + ':' + message);
    setForm({
      username: '',
      message: '',
    });
  }
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  }

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="메세지 입력란"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인버튼</button>
    </div>
  );
};

export default EventPractice2;