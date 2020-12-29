import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [viewPassword, setViewPassword] = useState(true);
    const [user, setUser] = useState(null);

    const toggleViewPassword = () => {
        setViewPassword(!viewPassword);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            username,
            password,
        };

        setUser(userData);
        setUsername("");
        setPassword("");
    };


    return (
        <div style={{textAlign: "center"}}>
            <h1>Login</h1>
            <form
                style={{
                    display:"grid",
                    alignItems:"center",
                    justifyContent:"center"
                }}
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
                <div>
                    <input
                        type={viewPassword ? "password": "text"}
                        placeholder="Password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <span>
                        <span style={{
                            display: "inline-block",
                            border: "1px solid lightgrey",
                            fontSize: "12px",
                            padding: "3px 4px",
                            margin: "3px 4px"
                        }}
                        onClick={toggleViewPassword}>Text
                    </span>
                    </span>
                </div>
                <button type="submit">Submit</button>
            </form>


            <p>{user && JSON.stringify(user, null, 2)}</p>

        </div>
    );
}

export default Login;