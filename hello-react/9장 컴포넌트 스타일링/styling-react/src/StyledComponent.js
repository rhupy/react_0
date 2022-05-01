//styled-components 라이브러리 사용하여, 스타일링된 엘리먼트 만들기
// 마켓플레이스에서 vscode-styled-components 설치해야 코드에 색상 표시됨
import styled, { css } from 'styled-components';

const sizes = {
    desktop: 1024,
    tablet: 768,
};

//위에 있는 size객체에 따라 자동으로 media 쿼리 함수를 만들자
//https://www.styled-components.com/docs/advanced#media-templates
/*
const media = Object.keys(sizes).reduce((acc, label)=> {
    acc[label = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)};
        }
    `;
    return acc;
}, {});
*/

//styled.div 뒤에 Tagged템플릿 리터럴 문법을 통해 스타일을 넣어주면, 해당 스타일이
// 적용된 div로 이루어진 리액트 컴포넌트가 생성됨
// 나중에 <Box /> 이런식으로 사용한다
// styled.input 이나 styled.button 등도 된다
const Box = styled.div`
    /* props로 넣어준 값을 직접 전달 */
    background: ${(props) => props.color || 'blue'};
    padding: 1rem;
    display: flex;

    width: 1025px;
    margin: 0 auto;
    @media (max-width: 1024px) {
        width: 768;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

//컴포넌트 자체에 스타일링을 해줄수 있다
const StyledInput = styled('input')`
    color: blue;
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    /* 다음 코드는 inverted 값이 true 일 때 특정 스타일을 부여해준다 */
    ${(props) =>
        props.inverted &&
        css`
            background: none;
            border: 2px solid white;
            color: white;

            &:hover {
                background: red;
                color: black;
            }
        `};
    & + button {
        margin-left: 1rem;
    }
`;

const StyledComponent = () => (
    <Box color="black">
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
        <StyledInput></StyledInput>
    </Box>
);

export default StyledComponent;
