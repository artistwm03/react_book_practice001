import React from 'react';
import qs from 'qs';

// qs 를 import 시키기 위해서 yarn add qs 해준 상태.

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 ? 를 생략한다. 
  });

  const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 값은 문자열.
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true 로 설정하셨네요~</p>}
    </div>
  );
};
// Home 페이지를 소개하는 놈.

//https://localhost:3000/about?detail=true  여기로 접속하면 detail 값을 true로 설정하셨군요! 가 보임.
export default About;
