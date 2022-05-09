# 리액트 공부를 위한 리포지토리

`yarn add sass` : sass 활용 10장
`yarn add classnames` : 조건부 스타일링 10장
`yarn add react-icons` : 아이콘 활용 10장
`yarn add immer` : 불변성 더 쉽게 유지하기 12장

# memo

- 엣지 확장, react dev tool 설치하면
  ㄴ컴포넌트, 프로파일(성능체크)
- onSubmit 이벤트는 브라우저에서 새로고침을 발생 시킨다
  이를 방지하기 위해서 이 함수를 호출한다: `e.preventDefault()`
- onSubmit 과 onClick 의 차이점은 submit은 box에서 enter를 눌러도 발동한다는 점
- `.push` : 객체에 데이터 추가
- `.concat` : 배열에 데이터 추가
- `.filter` : 데이터 필터링해서 변경
  array: data.array.filter((info) => info.id !== id)
- `.map` : 배열을 foreach 하기
  {data.array.map( info => (
  <li key={info.id} onClick={() => onRemove(info.id)}>
  {info.username} ({info.name})
  </li> )}
- `.splice` : 데이터에서 제거하기
  data.splice(data.findIndex( t=> t.id == 1), 1) //id가 1인거만 날리기

1. `useReducer`를 썻을때 장점은, 컴포넌트의 업데이트 로직을 컴포넌트밖으로 빼낼수있단 점
   props로 쓰이는 함수생성은 유즈콜백을 사용, 의존성 파라미터 추가 필요

2. `useMemo` 와 `useCallback` 은 거의 비슷하나 (의존성 파라미터도)
   useMemo 는 변수를 반환
   useCallback 은 함수를 반환
   그러므로
   useMemo ( () => () => {<~로직>} , [])
   이런식으로 쓰면 useCallback 과 useMemo 가 같긴함

3. `useState` 사용시 `useState(functionX)` `useState(functionX())` 는다름
   좌측은 처음 한번만 호출됨
   우측은 여러번 호출

4. 성능 최적화를 위해서는 :
   `useMemo` 로 컴포넌트를 export 하고 : `export default React.memo(TodoListItem)`
   그 컴포넌트가 인자로 받아쓰는 함수도 최적화해야한다
   useState의 함수 : setTodos(예)를 쓸떄 `todo(변수명) =>` 만 앞에 넣으면 됨 (최적화 작업시 소스 변경이 적음)
   혹은 리듀서를 활용하여 `dispatch` 로 처리 (소스코드의 많은변경, 로직을 컴포넌트밖으로 꺼낼수있음)

5. 불변성
   `기존의 값을 그냥 두면서, 새로운 값을 만드는 것`
   const array1 = array
   const array2 = [ array... ]
   위 두 객체는 안에 내용이 같더라도
   array1 === array2 하면 false임

   불변성을 지키지 않는다면 객체내부 값이 바뀌어도 감지할수 없기 때문에
   `React.memo` 를 통한 최적화가 불가능

6. ...문법을 통한 복사는 `얕은 복사`이다
   내부값이 전부 복사되는게 아니라 `배열 복사 시, 가장 바깥쪽에 있는거만 복사`해버림
   따라서
   const todos = [ {id:1, checked:true} ];
   const nextTodos = [ ...todos];
   `console.log(todos === nextTodos)` 전체를 비교하면 결과는 False 이다
   `console.log(todos[0] === nextTodos[0])` True임
   따라서 내부값이 있는거라면 내부값도 복사야해야함
   nextTodos[0] = {...nextTodos[0], checked:false} 이렇게 얕은 복사를 하고나면
   `console.log(todos[0] === nextTodos[0])` False 가됨

7. `immer` 라이브러리 : 불변성을 유지하면서 업데이트하는데 도움 (12장에서 심화)
   immer 는 불변성 유지하는 코드가 복잡할때만 사용해도 충분
   //immer 첫번째 para는 수정하고 싶은 상태
   // 두번째 para는 어떻게 업데이트할지 정의하는 함수
   produce(form, (draft) => {
   draft[name] = value;
   })
8. yarn add react-virtualized : 보이는거만 렌더링하게 해주는 라이브러리
   개발자도구의 요소나 컴포넌트탭에서 px단위로 각 항목크기를 알아낸다(테두리 포함)
   List 컴포넌트를 쓸때는 전체크기, 각항목의 높이, 각 항목 렌더링시 사용할 함수, 배열을 props로 넣는다
   그러면 자동으로 최적화함 (11장 - TodoList.js)
