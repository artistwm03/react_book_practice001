import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './13_Router/About';
import Home from './13_Router/Home';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </div>
  );
};

// 프로젝트에 라우터 적용.
// yarn add react-router-dom 안돼있을 경우 실행.

// exact 값을 true 로 준 이유는 ->  두 경로에  / 가 공통으로 들어가 있기 때문에 화면에 두 컴포넌트가 실행된다.
// 따라서 이를 방지하기 위해서 exact 값을 true 로 준것이다. 그러면 /about 입력하면 About 컴포넌트에 대한 내용만 출력된다.

// Link 컴포넌트 : 클릭하면 다른 주소로 이동시켜 주는 컴포넌트 , 페이지의 주소만 변경해 준다.(페이지를 새로 불러오지 않음.)
export default App;