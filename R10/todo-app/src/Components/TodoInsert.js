import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

// onInsert 는 props로 전달받은 함수이다
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  //함수가 계속 생기지 않고, 재활용을 위해서 useCallback Hooks를 사용
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []); //컴포넌트가 처음 렌더링될때만 함수를 생성

  const onSubmit = useCallback(
    (e) => {
      onInsert(value); //onInsert 에 value(여기선 input DOM의 value)를 넣어 실행하고,
      setValue(''); //value값 초기화

      //submit 이벤트는 브라우저에서 새로고침을 발생 시킨다
      //이를 방지하기 위해서 이 함수를 호출한다
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    //onClick 대신 onSubmit 을 사용한 이유는 onSubmit 은 엔터를 눌러도 발동됨
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
