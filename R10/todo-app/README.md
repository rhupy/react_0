### 10장 - 일정 관리 웹 어플리케이션 만들기

# Sass, classnames, react-icons 활용함

`yarn add sass classnames react-icons`
react-icons 는 리액트에서 예쁜 아이콘을 쓸수 있는 라이브러리\
아이콘 리스트와 사용법은 https://react-icons.netlify.com\
이 라이브러릐 장점은 SVG 형태로 이루어진 아이콘을 리액트 컴포넌트처럼 매우 쉽게 사용할 수 있다는 점\
아이콘의 크기나 색상은 props 혹은 CSS 스타일로 변경하여 사용할 수 있다\
\
classnames 는 조건부 스타일링을 위하여 사용

## 리액트 개발자 도구 (엣지 / 크롬)

확장 검색 'react' Develop tool 설치하면, 브라우저 개발자모드에서 compoent 항목이 생김\
리액트 컴포넌트를 심층분석 할 수 있다 (props, hooks 등)

## 만든 컴포넌트 설명

# TodoTemplate

화면을 가운데에 정렬, 앱타이틀(일정관리)를 보여준다\
children 으로 내부 JSX를 props로 받아와서 레더링해준다

# TodoInsert

새로운 항목을 입력하고 추가할 수 있는 컴포넌트\
state 를 통해 인풋의 상태를 관리

# TodoListITem

각 할일 항목에 대한 정보를 보여주는 컴포넌트. todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 UI를 보여줌

# TodoList

todos 배열을 props 로 받아 온 후, 이를 배열 내장 함수 map을 사용해 여러개의 TodoListItem 컴포넌트로 변환하여 보여줌
\
\
\
\

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
