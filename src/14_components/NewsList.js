import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d6c614055e7f49a485d3c121fa70ec32`
            // '' 안에 주소를 넣으면 안되고.. `` 안에다가 넣어줘야됨...  왜 그런거지..???
        );
        setArticles(response.data.articles);
      } catch (e) {
          console.log(e);
      }; 
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기 중일 때.
  if (loading) {
      return <NewsListBlock>대기 중...</NewsListBlock>
  }

  // 아직 articles 값이 설정되지 않았을 떄
  // 배열을 map 함수를 사용하여 컴포넌트 배열로 변환할 때 null 값 체크 해줘야 한다.
  // 왜냐하면, null 은 map함수가 없기 때문에.. 렌더링 과정에서 오류가 발생할 수도 있다. (흰 페이지만 보이게 될 수 있다.)
  if (!articles) {
    return null;
  }

  return (
      <NewsListBlock>
        {articles.map(article => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock>
  );
}

export default NewsList;