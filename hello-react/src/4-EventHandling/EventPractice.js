import { useState } from 'react';

const EventPractice = () => {
    //const [username, setUsername] = useState('');
    //const [message, setMessage] = useState('');
    //const onChangeUsername = (e) => setUsername(e.target.value);
    //const onChangeMessage = (e) => setMessage(e.target.value);
    //==> 위의 2개 함수를 아래 onChange함수 1개로 대체한다
    const [form, setForm] = useState({
        username: '',
        message: '',
    });
    const { username, message } = form;
    const onChange = (e) => {
        const nextForm = {
            ...form, //기존의 form 내용을 여기에 복사하고
            [e.target.name]: e.target.value, //원하는 값을 덮어씌운다
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ' : ' + message);
        //setUsername('');
        //setMessage('');
        setForm({
            username: '',
            message: '',
        });
    };
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>Event Practice!</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
                onKeyPress={onKeyPress}
            ></input>
            <input
                type="text"
                name="message"
                placeholder="사용자명"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            ></input>
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;
