import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  return (
    <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/profiles/velopert">veloper 프로필</Link>
          </li>
          <li>
            <Link to="/profiles/gildong">gildong 프로필</Link>
          </li>
        </ul>
        
        <Route
          path="/profiles"
          exact
          render={() => <div>사용자를 선택해 주세요</div>}
        />
        
        <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

// exact 는 exact={true} 와 같은 의미. (JSX에서 props를 설정할 때 값을 생략하면 자동으로 true 로 설정)

// render 라는 props 를 통해서 보여주고 싶은 JSX를 넣어 줄 수 도 있다.

export default Profiles;