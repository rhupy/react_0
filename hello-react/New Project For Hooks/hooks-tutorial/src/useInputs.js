//커스텀 hooks 만들기
import { useReducer } from 'react';

//state를 반환하는 reducer
// state는 이전값이고
// action은 화면에서 이벤트가 일어난 변경점을 가리키는 변수
//  그것이 name이나 nickname 이라면,
//  그 액션의 value를 설정(인펏에서 유저가 넣은 값)하게 되는것!
function reducer(state, action) {
    return {
        ...state,
        //불변성을 지키되, state 의 nickname이나 name 만 값을 바꿔준다
        [action.name]: action.value,
    };
}

//외부 호출이 가능한 커스텀 hooks를 생성
// 값을 바꾸는 역할을 하는 펑션
export default function useInputs(initialForm) {
    //useReducer 로 initialForm 를 받아서 reducer를 실행하도록 정의
    const [state, dispatch] = useReducer(reducer, initialForm);

    //인펏 컨트롤 상태값을 통채로 e로 넣는다
    const onChange = (e) => {
        dispatch(e.target); //reducer 실행
    };
    return [state, onChange];
}
