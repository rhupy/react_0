# 리액트 공부를 위한 리포지토리

# memo

- 엣지 확장, react dev tool 설치하면
  ㄴ컴포넌트, 프로파일(성능체크)

1. 리듀서를 썻을때 장점은, 컴포넌트의 업데이트 로직을 컴포넌트밖으로 빼낼수있단 점
   props로 쓰이는 함수생성은 유즈콜백을 사용, 의존성 파라미터 추가 필요

2. useMemo 와 useCallback 은 거의 비슷하나 (의존성 파라미터도)
   useMemo 는 변수를 반환
   useCallback 은 함수를 반환
   그러므로
   useMemo ( () => () => {<~로직>} , [])
   이런식으로 쓰면 useCallback 과 useMemo 가 같긴함

3. useState 사용시 useState(functionX) useState(functionX() ) 는다름
   좌측은 처음 한번만 호출됨
   우측은 여러번 호출

4. 성능 최적화를 위해서는 :
   useMemo 로 컴포넌트를 export 하고 : `export default React.memo(TodoListItem)`
   그 컴포넌트가 인자로 받아쓰는 함수도 최적화해야한다
   useState의 함수 : setTodos(예)를 쓸떄 `todo(변수명) =>` 만 앞에 넣으면 됨 (최적화 작업시 소스 변경이 적음)
   혹은 리듀서를 활용하여 dispatch 로 처리 (소스코드의 많은변경, 로직을 컴포넌트밖으로 꺼낼수있음)

5. 불변성
   `기존의 값을 그냥 두면서, 새로운 값을 만드는 것`
   const array1 = array
   const array2 = [ array... ]
   위 두 객체는 안에 내용이 같더라도
   array1 === array2 하면 false임

   불변성을 지키지 않는다면 객체내부 값이 바뀌어도 감지할수 없기 때문에
   React.memo 를 통한 최적화가 불가능

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

7. immer 라이브러리 : 불변성을 유지하면서 업데이트하는데 도움
