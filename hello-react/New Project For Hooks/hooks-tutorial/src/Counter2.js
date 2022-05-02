//useReduce는 useState보다 더 다양한 컴포넌트 상황에 따라, 다양한 상태를 다른 값으로
// 업데이트 하려고 할때 사용하는 hook
// 리듀서 개념은 17장(리덕스)에 있음

//리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션값을 전달받아
// 새로운 상태를 반환한다 (새로운 함수를 만들때는 반드시 불변성을 지켜야함)

//리듀서를 썻을때 장점은, 컴포넌트의 업데이트 로직을 컴포넌트밖으로 빼낼수있단 점
import { useReducer } from 'react';

function reducer(state, action) {
    //action.type에 따라 다른 작업을 수행
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            //아무것도 해당되지 않으면 기존 상태 반환
            return state;
    }
}
const Counter2 = () => {
    //여기서 dispatch는 액션을 발생시키는 함수
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <p>
                카운터값은 <b>{state.value}</b>
            </p>
            {/*useReduce 함수안에 상태값을 지정한다 */}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'ETC' })}>+0</button>
        </div>
    );
};

export default Counter2;
