import { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Counter from './Counter';
import Info from './Info';
import Info2 from './Info2';
import Counter2 from './Counter2';
import Info3 from './Info3';
import Average from './Average';
import Average2 from './Average2';
import Average3 from './Average3';
import Info4 from './info4';

const style = {
    border: '1px solid black',
    height: '500px',
    width: '1000px',
    overflow: 'auto',
    position: 'relative',
};

function App() {
    //Info2 컨포넌트의 가시성을 바꿔보자
    const [visible, setVisible] = useState(false);

    return (
        <div>
            {/*8장 Hooks : Custom Hook */}
            <div style={style}>
                <Info4 />
            </div>

            {/*8장 Hooks : useRef : ref쉽게 쓰기 */}
            <div style={style}>
                <Average3 />
            </div>

            {/*8장 Hooks : useCallback : 연산 최적화2*/}
            <div style={style}>
                <Average2 />
            </div>

            {/*8장 Hooks : useMemo : 연산 최적화*/}
            <div style={style}>
                <Average />
            </div>

            {/*8장 Hooks : useReducer : 인풋상태 관리*/}
            <div style={style}>
                <Info3 />
            </div>

            {/*8장 Hooks : useReducer*/}
            <div style={style}>
                <Counter2 />
            </div>

            {/*8장 Hooks : useEffect : 뒷정리함수(cleanup)*/}
            <div style={style}>
                <button onClick={() => setVisible(!visible)}>
                    {visible ? '숨기기' : '보이기'}
                </button>
                <hr />
                {/* visible을 false처리하면 언마운트 됨*/}
                {visible && <Info2 />}
            </div>

            {/*8장 Hooks : useEffect*/}
            <div style={style}>
                <Info2 />
            </div>
            {/*8장 Hooks : useState*/}
            <div style={style}>
                <Info />
            </div>
            {/*8장 Hooks : useState*/}
            <div style={style}>
                <Counter />
            </div>
        </div>
    );
    /*
    <div className="App">
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
          Learn React
        </a>
      </header>
    </div>
    */
}

export default App;
