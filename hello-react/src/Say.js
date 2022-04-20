import { useState } from 'react';

const Say = (props) => {
    //useState 는 두개의 원소를 쓴다 : Setter함수이다
    // 첫번째 원소는 현재상태
    // 두번째는 바꿔줄 상태
    // 배열 비구조화 할당 문법 : const [x, setX] = array
    //함수형 컴포넌트에서 사용하는 useState
    const [text, setText] = useState('');
    const onClickEnter = () => setText('안녕하세요!');
    const onClickLeave = () => setText('안녕히 가세요!');
    const [color, setColor] = useState('red');

    //객체 다루기
    const object = { a: 1, b: 2, c: 3 };
    const nextObject = { ...object, b: 3 }; //사본 생성 (... 이것은 스프레드 연산자)

    //배열 다루기
    const array = [
        { id: 1, value: true },
        { id: 2, value: true },
        { id: 3, value: false },
    ];

    //setter함수들 concat, filter, map
    //배열에 새항목 추가
    let nextArray = array.concat({ id: 4 });
    //id가 2인항목 제거
    nextArray.filter((item) => item.id !== 2);
    //id가 1인 항목의 value를 false로 지정
    nextArray.map((item) => (item.id === 1 ? { ...item, value: false } : item));

    return (
        <div>
            <button onClick={onClickEnter}>{props.children}</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{text}</h1>
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>
                빨강
            </button>
            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
                파랑
            </button>
            <button
                style={{ color: 'brown' }}
                onClick={() => setColor('brown')}
            >
                갈색
            </button>
            <h1></h1>
            <h1></h1>
        </div>
    );
};

export default Say;
