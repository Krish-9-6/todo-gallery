import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: ''});
    const { email, password} = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

    const onSubmit = async e=> {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);

            sessionStorage.setItem('token', res.data.token);
            alert('Login Successful!');
            window.location.href='/';
        }
        catch (err) {
            alert(err.response.data.msg || 'Login Failed');
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
                <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <div className="auth-footer">
                <p>Don't have an account? <Link to="/register">Register here</Link></p>
            </div>
        </div>
    );
};

export default Login;