import { useState, useMemo, useCallback } from 'react';

const getAverage = (numbers) => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);

    return sum / numbers.length;
};

const Average2 = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

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
        },
        [number, list] //number 혹은 list가 바뀌었을때만 함수 생성
    );

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} />
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

export default Average2;
