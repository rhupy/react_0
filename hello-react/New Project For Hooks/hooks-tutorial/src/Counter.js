//useState는 가장 기본적인 Hook 입니다
import { useState } from 'react';

const Counter = () => {
    //useState사용법 이해 : cosnt [변수명, 세터함수] = useState(초기값)
    const [value, setState] = useState(0);
    const [strVal, setStrVal] = useState('ㄱ');

    return (
        <div>
            <p>
                카운터값은 <b>{value}</b>
            </p>
            <p>
                카운터값은 <b>{strVal}</b>
            </p>
            <button onClick={() => setState(value + 1)}>+1</button>
            <button onClick={() => setState(value - 1)}>-1</button>
            <button onClick={() => setStrVal('ㄱㄱ')}>ㄱ</button>
            <button onClick={() => setStrVal('ㄴㄴ')}>ㄴ</button>
        </div>
    );
};

export default Counter;
