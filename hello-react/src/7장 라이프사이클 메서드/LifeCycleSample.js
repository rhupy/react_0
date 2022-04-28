import { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    };
    myRef = null; //ref를 설정할 부분

    //생성자
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    //props 로 받아온 값을 state에 동기화 시킨다
    //컴포넌트가 마운트, 업데이트 될때 호출
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('1. getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }
    //렌더링을 마친후 실행됨.
    //이 안에서 다른 js라이브러리나 프레임웍의 함수를 호출하거나 이벤트 등록,
    // setTimeout, setInterval, 네트워크 요청 등 비동기 작업을 처리하자
    componentDidMount() {
        console.log('4. componentDidMount');
    }

    //props나 state를 변경했을때, 리렌더링을 시작할지 여부를 지정
    shouldComponentUpdate(nextProps, nextState) {
        console.log('2. shouldComponentUpdate', nextProps, nextState);
        //숫자의 마지막 자리가 4면 리렌더링 안함
        return nextState.number % 10 !== 4;
    }

    //컴포넌트를 DOM에서 제거할때 실행
    //componentDidMount 에서 등록한 이벤트, 타이머, 직접생성한 DOM등이 있다면
    // 여기서 제거작업을 해야한다
    componentWillUnmount() {
        console.log('last. componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1,
        });
    };
    //render에서 만들어진 결과물이 브라우저에 반영되기 직전에 호출
    // 반환값은 componentDidUpdate 에서 세번째 파라미터인 snapshot 값으로 전달받고
    // 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용 (예:스크롤바 위치)
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('5. getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    //리렌더링을 완료한 후 실행. 업데이트가 끝난 직후이므로, DOM관련 처리를해도
    // 무방함. prevProps or prevState 를 사용하여 컴포넌트가 이전에 가졌던 데이터에
    // 접근 가능. getSnapshotBeforeUpdate 에서 반환한 값이 있다면 여기서
    // snapshot 값을 전달 받을 수 있다
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('6. componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트되기 직전 색상: ', snapshot);
        }
    }

    render() {
        console.log('3. render');
        const style = {
            color: this.props.color,
        };

        return (
            <div>
                <h1 style={style} ref={(ref) => (this.myRef = ref)}>
                    {this.state.number}
                </h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;
