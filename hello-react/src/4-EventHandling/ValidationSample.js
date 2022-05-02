//Ref 배우기
import { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false,
    };

    handleChange = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000',
        });
        this.input.focus(); //아래에 지정한 Ref에 포커스를 준다
    };

    render() {
        return (
            <div>
                <input
                    ref={(ref) => (this.input = ref)} //콜백함수로, input DOM에다가 Ref를 지정
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={
                        this.state.clicked
                            ? this.state.validated
                                ? 'success'
                                : 'failure'
                            : ''
                    }
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;
