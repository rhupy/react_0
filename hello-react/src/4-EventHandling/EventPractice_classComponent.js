import { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: '',
        username: '',
    };
    /*
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this); //this를 바인딩
        this.handleClick = this.handleClick.bind(this); ////this를 바인딩
    }
    */
    //아래와 같이 화살표 함수 형태로 메서드를 정의하면 바인딩을 constructor(생성자)에서 일일히 하지않음
    //사용할 함수를 따로 빼서작성
    handleChange = (e) => {
        this.setState({
            //[]를 쓰면 안에있는 key가 가리키는 값이 key값으로 쓰임
            [e.target.name]: e.target.value,
            //[state.message]: e.target.value,
        });
    };
    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            message: '',
            username: '',
        });
    };
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    };

    render() {
        return (
            <div>
                <h1>event EventPractice</h1>
                <input
                    type="text"
                    name="username"
                    placeholer="아무거나 입력해"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="message"
                    placeholer="아무거나 입력해"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button
                    onClick={this.handleClick}
                    // onClick={() => {
                    //     alert(this.state.message);
                    //     this.setState({
                    //         message: '',
                    //     });
                    // }}
                >
                    확인
                </button>
            </div>
        );
    }
}

export default EventPractice;
