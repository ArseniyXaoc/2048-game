import React, { useState } from 'react';

const Navbar: React.FC<{score: number}> = ({score}) => {
    //const [score, setscore] = useState(0);
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className = "center brand-logo">2048 Game</a>
                <p className = "left on-med-and-down score">Score: <span>{score}</span></p>
                <ul className = "right hide-on-med-and-down">
                    <li><a href="/">First</a></li>
                    <li><a href="/">Second</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar