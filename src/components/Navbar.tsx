import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className = "brand-logo">2048 Game</a>
                <ul className = "right hide-on-med-and-down">
                    <li><a href="/">First</a></li>
                    <li><a href="/">Second</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar