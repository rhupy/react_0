import PropsTypes from 'prop-types';//props 검증과, props의 데이터타입을 지정하기위함
import { Component } from 'react';//for 클래스형 컴포넌트

class MyComponent extends Component {
    //외부에 선언한거보다 디폴트는 이게 우선
    static defaultProps = {
        name : '기본 이름',
        //children : '칠드런!2',
    };
    static PropsTypes = {
        name : PropsTypes.string,
        children : PropsTypes.string
    }
    render() {
        //클래스형 컴포넌트에서는 props를 쓸때 아래처럼
        const { name, favoriteNumber, children } = this.props; //비구조화 할당
        return (
            <div>
                안녕하세요 제이름은 {name}입니다.<br/>
                children 값은 {children} 입니다.<br/>
                필수값{favoriteNumber}
            </div>
        )
    }
}
// const MyComponent = ( props ) => {
//     return (
//                 <div>
//                     안녕하세요 제이름은 {props.name}입니다.<br/>
//                     children 값은 {props.children} 입니다.<br/>
//                     그리고{props.kkk}<br/>
//                     필수값{props.favoriteNumber}
//                 </div>
//             )
// };
//props의 값을 지정하지 않을때 디폴트값을 설정한다
MyComponent.defaultProps = {
    
    children : '칠드런!',
    kkk : 518,
    favoriteNumber:1
}

MyComponent.PropsTypes = {
    name: PropsTypes.string,
    kkk: PropsTypes.number,
    favoriteNumber: PropsTypes.number.isRequired
}
export default MyComponent;