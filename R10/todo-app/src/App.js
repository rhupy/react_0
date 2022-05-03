import { useState, useRef, useCallback } from 'react';

import TodoTemplate from './Components/TodoTemplate';
import TodoInsert from './Components/TodoInsert';
import TodoList from './Components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  //고윳값으로 사용될 id
  //ref를 사용하여 변수 담기
  // nextId라는 Ref를 선언했고 기본 값은 4이다
  // 이제 nextId를 수정하면 nextId를 Ref로 가진 Dom은 모두 수정된다
  // 이 예제에서는 마치 static 변수? 처럼 쓰고있는 듯 하다
  // useRef는 엘리먼트를 가리키는 역할 외에도,  컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리할 수 있다
  // useRef로 관리되는 변수는 값이 바뀌어도 리렌더링 되지 않는다!!!<---이래서 변수로도 쓰나봄.\
  // 만약 아래 nextId를 nextId = 4 이런식으로 쓴다면,, +1씩 될때마다 리렌더링되서 화면이 연속으로 안변함
  const nextId = useRef(4);

  //Insert 기능구현, props로 전달하는 함수 만들때는 항상 useCallback 을 쓰도록 하자(성능업)
  const onInsert = useCallback(
    (text) => {
      //todo 객체를 만들어서,
      const todo = {
        id: nextId.current, //Ref를 쓸때는 current로 현재 가리키는 것을 가져온다
        text,
        checked: false,
      };
      // 기존 todos 에 이어 붙인다
      setTodos(todos.concat(todo)); //concat 함수는 기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열을 만들어줍니다
      // 그리고 nextId 는 1을 더해놓는다
      nextId.current += 1;
    },
    [todos], //useCallback 의 두번째 인자는 의존성이다. 이걸 안넣으면 todos값이 변해도, onInsert가 호출시 todos 값이 안변한다
    // 논외로, useMemo 또한 useCallback 처럼 사용법이 같으며 성능을 위해 사용되며, 마찬가지로 두번째가 의존성이다
    // 단, useMemo는 함수가 아닌 상태값을 반환한다. 그러므로 useMemo ( () => () => {<~로직>} , []) 이런식으로 쓰면 useCallback랑 같긴함
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id)); //해당 id만 제외하고 남긴다
    },
    [todos],
  );
  return (
    <TodoTemplate>
      {/** TodoInsert 라는 사용자 컴퍼넌트에는 { onInsert } 로 props가 한개 있고, */}
      {/** 여기서 'onInsert' prop를 명시하여, onInsert 힘수를 props 로 전달한다 */}
      <TodoInsert onInsert={onInsert} />
      {/** TodoList 라는 사용자 컴퍼넌트에는 { onRemove } 로 props가 한개 있고, */}
      {/** 여기서 'onRemove' prop를 명시하여, onRemove 힘수를 props 로 전달한다 */}
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
};
export default App;
