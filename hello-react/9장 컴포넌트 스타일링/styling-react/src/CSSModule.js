import styles from './CSSModule.module.css';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles); //미리 styles에서 클래스를 받아오도록 설정

const CSSModule = () => {
    console.log(styles);
    return (
        <div>
            {/*CSSModule.module.cs 에 있는 클래스 이름 wrapper를 사용*/}
            {/*리터럴 백틱` 을 활용한 문자열 합치기로 2개의 클래스 네임을 지정했다*/}
            <div className={`${styles.wrapper} ${styles.inverted}`}>
                {/*CSSModule.module.cs 에 글로벌을 사용했으면 style.을 생략*/}
                안녕하세요. 저는 <span className="something">CSS Module</span>
            </div>

            {/* classnames 라이브러리의 bind 를 써서 더 간편하게 여러개의 클래스네임을 사용*/}
            <div className={cx('wrapper', 'inverted2')}>
                {/*CSSModule.module.cs 에 글로벌을 사용했으면 style.을 생략*/}
                classnames 라이브러리 사용하기. 저는{' '}
                <span className="something">CSS Module</span>
            </div>

            {/* classnames 라이브러리를 쓰면 true/false 값에 따라 스타일을 적용 할 수 있다 */}
            <div className={cx({ wrapper: true }, { inverted2: false })}>
                {/*CSSModule.module.cs 에 글로벌을 사용했으면 style.을 생략*/}
                classnames 라이브러리 사용하기. 저는{' '}
                <span className="something">CSS Module</span>
            </div>
        </div>
    );
};

export default CSSModule;
