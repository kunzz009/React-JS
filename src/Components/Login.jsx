import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

export const Login = (props) => {
    const navigate = useNavigate()
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        navigate('/admin/dashboard')
    }

    return (
        <div className="auth-form-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit} >
                <label htmlFor="user">User</label>
                <input value={user} onChange={(e) => setUser(e.target.value)} type="user" placeholder="username" id="user" name="user" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                {/* <div class="item">
                    <label class="checkbox-custom">
                        <input type="checkbox" class="f-input" />
                        <div class="f-inner">
                            <span class="f-icon" style="border-radius: 3px: "></span>
                            <p class="f-text">
                                <span>Lưu tên đăng nhập</span>
                            </p>
                        </div>
                    </label>
                </div> */}
                <button type="submit">Log In</button>
            </form>
            {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
        </div>
    )
}