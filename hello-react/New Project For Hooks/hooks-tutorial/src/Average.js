//useMemo를 사용하면 함수 컨포넌트 내부에서 발생하는 연산을 최적화한다
// 렌더링 할때마다 재연산 할필요없는것들은 재사용할수 있게함
import { useState, useMemo } from 'react';

const getAverage = (numbers) => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);

    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = (e) => {
        setNumber(e.target.value);
    };

    //list에 항목을 추가하는 이벤트
    const onInsert = (e) => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };

    //리스트가 바뀔때만 getAverage 함수를 호출
    //useMemo( ()=> [반환할것], [이게 바뀔때])
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ui>
                {list.map(
                    //모든 리스트를 출력
                    //like a For문??index -~ max
                    (value, index) => (
                        <li key={index}>{value}</li>
                    )
                )}
            </ui>
            <div>
                <b>평균값</b> {avg}
            </div>
        </div>
    );
};

export default Average;
