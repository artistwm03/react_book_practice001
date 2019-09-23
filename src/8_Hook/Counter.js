import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  // value   는 상태 값.
  // setVaue 는 상태를 설정하는 함수.

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
        {/* useState 파라미터 값이 0 이니까 현재카운터 값은 0 입니다로 출력 */}
      </p>
      <button onClick={() => setValue(value + 1)}>더하기 1</button>
      <button onClick={() => setValue(value - 1)}>빼기 1</button>
    </div>
  );
};

export default Counter;
