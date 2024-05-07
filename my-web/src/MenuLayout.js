import React, { useState } from 'react';

const MenuLayout = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => {
        setShowLoginForm(true);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginFormSubmit = (event) => {
        event.preventDefault();
        // Verificare username și parolă și autentificare utilizator
        // Înlocuiește acest comentariu cu logica de autentificare
    };

    return (
        <div>
            <header>
                <h1>Titlul Paginii</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#" onClick={handleLoginClick}>Log In</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </nav>
            </header>

            {showLoginForm && (
                <div className="login-form">
                    <h2>Log In</h2>
                    <form onSubmit={handleLoginFormSubmit}>
                        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
                        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        <button type="submit">Login</button>
                        <p><a href="#">Ai nevoie de ajutor?</a></p>
                    </form>
                </div>
            )}
        </div>
    );
};

export default MenuLayout;
