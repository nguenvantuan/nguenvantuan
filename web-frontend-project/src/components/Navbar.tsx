import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; // Assuming you will create a CSS file for styling

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <NavLink exact to="/">Trang chủ</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/scholarships">Học Bổng</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/schools">Danh Sách Trường</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/fields-of-study">Danh Sách Ngành</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/rankings">Xếp Hạng Trường</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;