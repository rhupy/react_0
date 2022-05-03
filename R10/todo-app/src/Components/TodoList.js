import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {/*내장함수 map을 통해 받아온 todos배열을 TodoListItem으로 이우러진 배열로 변환하여 렌더링*/}
      {todos.map((todo) => (
        // 여기서 사용되는 key값은 각 항목마다 가지고 있는 고윳값인 id로 한다
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
