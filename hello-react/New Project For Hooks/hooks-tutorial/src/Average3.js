//useRef는 함수 컨포넌트에서 ref를 쉽게 사용하도록 한다
// 여기서는 등록버튼을 눌럿을때 포커스가 인풋으로 넘어가도록 해본다
import { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);

    return sum / numbers.length;
};

const Average3 = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    //useRef 를 사용하여 ref 를 설정하면, useRef 를 통해 만든
    // 객체 안의 current 값이 실제 엘리먼트를 가리킨다
    const inputEl = useRef(null);

    // const onChange = (e) => {
    //     setNumber(e.target.value);
    // };
    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []); //컴포넌트가 처음 렌더링될때만 함수를 생성

    // const onInsert = (e) => {
    //     const nextList = list.concat(parseInt(number));
    //     setList(nextList);
    //     setNumber('');
    // };

    //useCallback의 첫번째para : 생성하고 싶은 함수
    // 두번째para : 어떤값이 바뀔때 함수 새로 생성활지 명시
    const onInsert = useCallback(
        (e) => {
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNumber('');
            inputEl.current.focus(); //inputEl 는 input컨포넌트에  ref로 선언되어있다. 그러므로 inputEl은 input컨포넌트를 가리킨다
        },
        [number, list] //number 혹은 list가 바뀌었을때만 함수 생성
    );

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            {/* ref에 useRef로 만든 객체를 선언했다 */}
            <input value={number} onChange={onChange} ref={inputEl} />{' '}
            <button onClick={onInsert}>등록</button>
            <ui>
                {list.map(
                    //모든 리스트를 출력
                    //like a For문??index -~ max
                    (value, index) => (
                        <li key={index}>{value}</li>
                    )
                )}
            </ui>
            <div>
                <b>평균값</b> {avg}
            </div>
        </div>
    );
};

export default Average3;
