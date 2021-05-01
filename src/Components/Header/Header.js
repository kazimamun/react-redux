import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/cform'>Class Form</Link></li>
                <li><Link to='/fform'>Functional Form</Link></li>
            </ul>
        </nav>
    );
};

export default Header;