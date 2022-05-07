import React, { useCallback } from 'react';
import { List } from 'react-virtualized'; //for 성능 최적화
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import ListCache from '../../node_modules/lodash/_ListCache';

const TodoList = ({ todos, onRemove, onToggle }) => {
  //최적화 작업
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      classNAme="TodoList"
      width={512} //전체크기
      height={513} //전체높이
      rowCount={todos.length} //항목 갯수
      rowHeight={57} //1개항목 높이
      rowRenderer={rowRenderer} //항목을 렌더링할때 쓰는 함수 : 아래쪽의 todos.map((todo) => 대신 애가 렌더링
      list={todos} //배열
      style={{ outline: 'none' }} //List에 기본 적용되는 outline 스타일 제거
    />
    // <div className="TodoList">
    //   {/*내장함수 map을 통해 받아온 todos배열을 TodoListItem으로 이우러진 배열로 변환하여 렌더링*/}
    //   {todos.map((todo) => (
    //     <TodoListItem
    //       todo={todo}
    //       key={todo.id}
    //       onRemove={onRemove}
    //       onToggle={onToggle}
    //     />
    //   ))}
    // </div>
  );
};

export default React.memo(TodoList);
