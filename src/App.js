import React from 'react';
import { Route } from 'react-router-dom';
import About from './13_Router/About';
import Home from './13_Router/Home';

const App = () => {
  return (
    <div>
      <Route path="/"      component={Home} exact={true}/>
      <Route path="/about" component={About} />
    </div>
  );
};

// 프로젝트에 라우터 적용.
// yarn add react-router-dom 안돼있을 경우 실행.

// exact 값을 true 로 준 이유는 ->  두 경로에  / 가 공통으로 들어가 있기 때문에 화면에 두 컴포넌트가 실행된다.
// 따라서 이를 방지하기 위해서 exact 값을 true 로 준것이다. 그러면 /about 입력하면 About 컴포넌트에 대한 내용만 출력된다.
export default App;