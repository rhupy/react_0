import { useState, useEffect } from 'react';

const Info2 = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    //useEffect
    // 리액트 컴포넌트가 렌더링 될때마다 작업을 수행하도록 하는 hooks
    // 클래스형 컴포넌트의 componentDidMount + componentDidUpdate 를 합친형태
    useEffect(() => {
        console.log('렌더링이 완료되었습니다');
        console.log({
            name,
            nickname,
        });
    });

    useEffect(() => {
        console.log('마운트 될때만 실행됩니다');
        console.log({
            name,
            nickname,
        });
    }, []); //비어있는 배열을 두번째 파라미터로 넣으면 마운트될때만 실행.

    useEffect(() => {
        console.log('특정값이 업데이트 될때만 실행합니다');
        console.log({
            name,
            nickname,
        });
    }, [name]); //비어있는 배열을 두번째 파라미터로 변수를 넣으면 그 값이 변경될때만 실행.

    //뒷정리하기 : 컴포넌트가 언마운트되기 전이나, 업데이트 되기 직전에 어떠한 작업을
    // 수행하고 싶다면, useEffect 에서 뒷정리함수(cleanup)를 반환해야 한다
    // : useEffect에서 return을 넣으면 언마운트 or 업데이트 직전에 return을 반환한다
    useEffect(() => {
        console.log('effect 1');
        console.log(name);
        return () => {
            //name 언마운트시 return 실행
            //뒷정리
            console.log('cleanup');
            console.log(name);
        };
    }, [name]);

    //언마운트 될때만 뒷정리 함수를 수행하기
    useEffect(() => {
        console.log('effect 2');
        console.log(name);
        return () => {
            //뒷정리
            console.log('unmount!');
            console.log(name);
        };
    }, []); //빈 배열을 넣으면 뒷정리함수가 언마운트될때만 실행됨

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeNickName = (e) => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickName} />
            </div>
            <div>
                <div>
                    <b>이름:</b>
                    {name}
                </div>
                <div>
                    <b>닉네임:</b>
                    {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info2;
