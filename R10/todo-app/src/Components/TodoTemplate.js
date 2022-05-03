//화면을 가운데에 정렬, 앱타이틀(일정관리)를 보여준다
//children 으로 내부 JSX를 props로 받아와서 레더링해준다
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
