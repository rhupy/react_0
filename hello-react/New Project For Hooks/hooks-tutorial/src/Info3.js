import { useReducer } from 'react';

//파라미터 action에, 아래 23리인에서 콜하는 (e.target)이 들어감
function reducer(state, action) {
    console.log('action.name : ' + action.name);
    console.log('action.value : ' + action.value);
    console.log('state.name : ' + state.name);
    console.log('state.nickname : ' + state.nickname);
    return {
        ...state, //불변성을 지키면서,
        [action.name]: action.value, //업데이트한 새로운상태를 반환
    };
}

const Info3 = () => {
    //여기서 dispatch는 액션을 발생시키는 함수명
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: '',
    });
    const { name, nickname } = state;
    const onChange = (e) => {
        dispatch(e.target); //dispatch({action})
    };

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

export default Info3;
