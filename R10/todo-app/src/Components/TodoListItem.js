import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

//조건부 스타일링을 위하여
import cn from 'classnames';

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <div className="TodoListItem">
      {/* checkbox 이고 check 상태에 따라 스타일링 함 */}
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
