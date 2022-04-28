import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2'; //시작 스크립트
import reportWebVitals from './reportWebVitals';

//컴포넌트 페이지에 렌더링 하는 역할, react-dom 모듈을 불러와 사용
// 첫번째 파라미터는 : 페이지에 렌더링할 내용을 JSX형태로
// 두번쨰 파라미터는 : 해당 JSX렌더링을 document 내부요소 설정
//  id가 root인 요소 안에 렌더링(public/index.html 보면 있다)
ReactDOM.render(
    //React.StrictMode 는 레거시 기능을 사용하지 못하게 한다. ref 등 나중에는 사라질 기능들을 쓸때 경고를 출력
    <React.StrictMode>
        <App2 />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
