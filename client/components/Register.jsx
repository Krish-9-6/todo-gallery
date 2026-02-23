import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      sessionStorage.setItem('token', res.data.token);
      alert('Registration Successful!');
      navigate('/'); // Go to gallery
      window.location.reload();
    } catch (err) {
      alert(err.response?.data?.msg || 'Registration Failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={onChange} required />
        <input type="email" name="email" placeholder="Email Address" onChange={onChange} required />
        <input type="password" name="password" placeholder="Password" onChange={onChange} required />
        <button type="submit">Sign Up</button>
      </form>
      <div className="auth-footer">
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
};

export default Register;