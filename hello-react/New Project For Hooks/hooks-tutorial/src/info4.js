import useInputs from './useInputs';

const Info4 = () => {
    // onChange 함수는 커스텀hook내에 있다
    // [state, onChange] 는 useInputs 의 return 형태와 동일하다
    // state는 초기화는 {name: '',nickname: ''}
    const [state, onChange] = useInputs({
        name: '',
        nickname: '',
    });
    //비구조화 할당
    // name과 nickname이라는 변수를 선언하면서
    //  name은 state의 첫번째 요소로
    //  nickname은 state의 두번째 요소로 정의가 된다
    const { name, nickname } = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
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

export default Info4;
