import React, {useState} from 'react';

const initialFormState = {
    username: '',
    email: '',
    password: '',
};

function Register(props) {
    const [viewPassword, setViewPassword] = useState(true);
    const [form, setForm] = useState(initialFormState);
    const [user, setUser] = useState(null);

    const toggleViewPassword = () => {
        setViewPassword(!viewPassword);
    }

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser(form);
        setForm(initialFormState);
    };
    
    return (
        <div style={{textAlign: "center"}}>
            <h1>Register</h1>
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
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    />
                <div>
                    <input
                        type={viewPassword ? "password": "text"}
                        placeholder="Password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        />
                    <span>
                        <span id="viewPassword" style={{
                            display: "inline-block",
                            border: "1px solid lightgrey",
                            fontSize: "12px",
                            padding: "3px 4px",
                            margin: "3px 4px",
                            cursor: "pointer",
                        }}
                        onClick={toggleViewPassword}>Text
                        </span>
                    </span>
                </div> 
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            {user && JSON.stringify(user, null, 2)}
        </div>
    );
}

export default Register;