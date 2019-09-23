import React, { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickName, setNickname] = useState('');
  // useState 여러개 사용 가능.! 관리해야 되는 상태가 여러개라도 ok.

  const onChangeName = e => {
    setName(e.target.value);
  };
  // onChangeName 함수는 name 값 업데이트 시켜줌.
  // input 창에 값이 들어가면 바로바로 반영 됨.
  
  // const onChangeName = e => setName(e.target.value);
  // 위 처럼 한 줄로 사용 가능. 

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickName} onChange={onChangeNickname}/>
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickName}
        </div>
      </div>    
    </div>
  );
};

export default Info;