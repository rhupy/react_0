리액트 개발 환경 직접 구축하기.
처음엔 바벨이나 웹팩없이, 순수 리액트로 시작




바벨 : JS 문법 변환

1. json 생성
npm init -y

2. 바벨 설치
npm install @babel/core @babel/cli @babel/preset-react

3. 바벨 실행 (파일이 변환되어 생성됨)
npx babel --watch src --out-dir . --presets @babel/preset-react

npx명령어는 2.에서 설치된 바벨 명령어를 실행해준다:
--watch를 넣으면 변경될 때 마다 자동으로 컴파일을 해준다





웹팩 : 다양한기능이 있으며, 가장 큰 이유는 모듈시스템(ESM, commonJS) 사용 

