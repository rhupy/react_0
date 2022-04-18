//임포트 구문 : import를 사용하여 다른 파일들을 불러와 사용할 수 있다. (node에서 지원해주는 기능이며)
// node에서는 require구문이었음
// 이러한 기능을 쓰기 위하여 bundler를 사용, ex) 웹팩 이라는 번들을 많이 씀
// 웹팩의 로더기능 : SVG, CSS 파일 또한 불러와서 사용가능
// 바벨 : 최신 문법을 ES5문법으로 변환해줌. for 구버전 브라우저와의 호환을 위하여
import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react'; // 컴포넌트에 div요소외 다른것을 쓰기 위함

//App 이라는 컨포넌트를 만들었다 : 함수 컨포넌트
// js와 html 구문을 포함하고 있다 : 이것을 JSX 라 부른다
// JSX 코드를 써서 편하게 렌더링(보여주기) 할 수 있게된다
// JS코드만 쓴다면, return React.createElement("~~~") 일일이 이런식으로 요소들을 작성해야해서 불편함
function App() {

  let name = '리액트';
  let name1 = undefined;
  {/* 스타일적용, 카멜표기법쓸것  */}
  const style = {
    backgroundColor : 'red',
    color : 'aua',
    fontSize: '48px'
  };
  return (
    //컴포넌트 내에는 단 하나의 요소로 감싸주어야만 한다
    // 이유는 : VirtualDOM 에서 컴포넌트 변화를 효율적으로 감지하기 위함
    // div요소 외다른것 사용하려면 Fragment기능을 쓴다(리액트16이상)

    //className워드를 사용하여 .react라는 css를 불러왔다.class <- 기존에 있어서 겹치므로 리액트는 className을 쓴다
    <div className="react">
      {/* 조건부렌더링 : ?, : 을 쓰는 기본형태, null은 아무것도 안보여줌을 뜻함 */}
      {name === '리액트' ? <h1>[===, ?, :] if true that show</h1> : null} 

      {/* 조건부렌더링 : && 연산자를 활용하여 코드를 줄임 */}
      {name === '리액트' && <h1>[===, &&] if true that show</h1>} 

      {/* undefine일때 보여주고 싶은 렌더링이 있는 경우 */}
      {name1 || <h2>[or 연산자|| ] 값이underfined입니다</h2>}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
           >
          
          {/* 스타일 적용 */}
          <div style = {style}>
          Learn React 깔깔! 
          </div>
          
          
          {/* JSX내부라면, undefined 을 출력하더라도 오류가 안남 */}
          {name1}

          {/* 조건부 연산자 === */}
           {name === '리액트' ? 
           (
             <h1>true!!</h1>
           ): 
           (
             <h2>false!!</h2>
           )}



          </a>
        </header>
    </div>

    // <Fragment>
    //   <h1>TEST!!!!</h1>
    // </Fragment>
  );
}

export default App;
