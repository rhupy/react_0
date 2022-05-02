import { Component } from 'react';

class Counter extends Component {
    //Component의 생성자 메서드
    //이 함수가 호출되면 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component클래스가 지닌
    // 생성자 함수를 호출해준다
    /*
  constructor(props) {
    super(props); //반드시 super가 있어야한다(class 컴포넌트일때)

    // state의 초기값 설정하기
    this.state = {
      number: 10,
      fixedNumber: 20,
    };
  }
  */

    //클래스형에서 쓰는 state
    //이렇게 하면 constructor 메서드를 선언하지 않고 state 초기값을 설정한다
    state = {
        number: 100,
        fixedNumber: 200,
    };
    render() {
        const { number, fixedNumber } = this.state; //state를 조회할 때는 this.state로 조회합니다
        return (
            <div>
                <h1>바뀌지 않는 값 : {fixedNumber}</h1>
                <h1>바뀌는 값 : {number}</h1>
                <button
                    //onclick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
                    onClick={() => {
                        //this.setState를 사용하여 state에 새로운 값을 넣는다
                        /*
            this.setState({
              number: number + 3,
              //fixedNumber: fixedNumber - 1,
            });
            */
                        //prevState는 이전상태, props는 현재 지닌 상태를 말함
                        this.setState((prevState, props) => {
                            return {
                                number: prevState.number + 1,
                            };
                        });
                        //위 코드와 아래코드는 같은 기능
                        this.setState((prevState) => ({
                            //number: prevState.number + 1,
                            number: prevState.number + 1,
                        }));

                        this.setState(
                            //인자
                            { number: number + 1 },
                            () => {
                                console.log(this.state);
                            }
                        );
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
