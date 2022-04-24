//import React from 'react';
import { Component } from 'react';
//import MyComponent from "./MyComponet";
//import Counter from './Counter';
//import Say from './Say';
//import EventPractice from './4-EventHandling/EventPractice';
//import ValidationSample from './4-EventHandling/ValidationSample';
import ScrollBox from './4-EventHandling/ScrollBox';
import IterationSample from './6장 컴포넌트 반복/IterationSample';
//import aaa from './7장 컴포넌트의 라이프사이클 메서드/IterationSample';

//함수형 컴포넌트
/*
const App2 = () => {
    //아래의 리액트란 문자열은 props.children 을 의미한다
    return <App />; //리액트</EventPractice>;
};
*/
//클래스형 컴포넌트로 렌더링하자 (for ref사용11)
class App2 extends Component {
    render() {
        const style = {
            border: '1px solid black',
            height: '500px',
            width: '1000px',
            overflow: 'auto',
            position: 'relative',
        };
        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)',
        };

        return (
            <div>
                {/*6장*/}
                <div style={style}>
                    <IterationSample />
                </div>

                {/*5장*/}
                <div style={style}>
                    <ScrollBox ref={(ref) => (this.scroll_Box = ref)} />
                    <button onClick={() => this.scroll_Box.scrollToBottom()}>
                        맨밑으로
                    </button>
                </div>
            </div>
        );
    }
}

export default App2;
