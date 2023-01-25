import cl from './Login.module.scss';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../../redux/apiCalls";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };

    return (
        <div className={cl.login}>
            <form className={cl.login__form}>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    type="text"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                />
                <button
                    onClick={handleClick}
                    className={cl.login__btn}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;