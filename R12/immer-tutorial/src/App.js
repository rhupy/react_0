import { useRef, useCallback, useState } from "react";
import produce from "immer";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({
    name: "",
    username: "",
  });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      //e (input DOM) 의 name값과 value 키워드의 값을 가지고 온다. 아래와 같음
      // name = e.target.name
      // value = e.target.value
      const { name, value } = e.target;
      // form 의 변수 name 이나 username 의 값을 바꾼다
      setForm(
        //immer 첫번째 para는 수정하고 싶은 상태
        // 두번째 para는 어떻게 업데이트할지 정의하는 함수
        produce(form, (draft) => {
          draft[name] = value; //form의 [name] 값을 value로 바꾼다
        })
      );
    },
    [form]
  );

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); //onSubmit 이벤트의 새로고침 방지
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array에 새 항목 등록
      setData(
        produce(data, (draft) => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    (id) => {
      setData(
        produce(data, (draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1
          );
        })
      );
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {/*data.array 의 한 요소를 info 로하여, foreach와 비슷  */}
          {/*map( info => (내부 중괄호로 하거나 안넣음. 주의! 대괄호로 하면 동작안함. 대괄호는 함수임) )  */}
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
