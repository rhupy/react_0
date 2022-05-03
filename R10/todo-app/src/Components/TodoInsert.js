import { MdAdd } from 'react-icons/md';
import './TodoTemplate.scss';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <from className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </from>
  );
};

export default TodoInsert;
