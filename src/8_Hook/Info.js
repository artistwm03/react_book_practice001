import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  // useState 여러개 사용 가능.! 관리해야 되는 상태가 여러개라도 ok.
  useEffect( () => {
    console.log('렌더링 완료.');
    console.log({
      name,
      nickname
    });
  }, []);
  // useEffect 함수의 두번째 인자를 위 처럼 [] 비어있는 배열을 넣어주면,
  // 설정해놓은 함수가 화면에 맨 처음 렌더링될 때만 실행 되고 , 업데이트될 때는 실행되지 않는다.
  // , [] 를 지워보고 차이점 비교해보기. 개발자 도구 console 탭에서 차이점 확인 가능.


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
        <input value={nickname} onChange={onChangeNickname}/>
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>    
    </div>
  );
};






function increase(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = number +10;
        if (result > 50) {
          const e = new Error('NumberTooBig');
          return reject(e);
        }
        resolve(result);
    }, 1000);
  });
  return promise;
}


async function runTasks() {
  try{
    let result = await increment(0);
    console.log(result);
    let result = await increment(0);
    console.log(result);
    let result = await increment(0);
    console.log(result);
    let result = await increment(0);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}











export default Info;