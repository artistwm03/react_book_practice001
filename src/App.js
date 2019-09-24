import React from 'react';
import { Route } from 'react-router-dom';
import About from './13_Router/About';
import Home from './13_Router/Home';

const App = () => {
  return (
    <div>
      <Route path="/"      component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

// 프로젝트에 라우터 적용.
// yarn add react-router-dom 안돼있을 경우 실행.
export default App;