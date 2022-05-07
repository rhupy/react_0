import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
//조건부 스타일링을 위하여
import cn from 'classnames';

//TodoList 최적화 작업후 화면이 깨지므로 props 에 style 를 추가했다(클래스:TodoListItem-virtualized)
const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        {/* checkbox 이고 check 상태에 따라 스타일링 함 */}
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>

        {/* onClick은 Div Dom의 이벤트이다. 함수를 넣어야한다 onClick={onRemove(id)} 라고 하면 오류남. onRemove는 const 변수*/}
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

//export default TodoListItem;
export default React.memo(TodoListItem); //todo, onRemove, onToggle 가 변해야만 렌더링하도록 함
