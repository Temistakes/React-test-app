import React from "react";
import cl from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header({ isAuth, id, login, logout, ...props }) {
    return (
        <header className={cl["header"]}>
            <NavLink to="/" className="logo">
                Bobr
            </NavLink>

            {isAuth ? (
                <div>
                    <NavLink
                        to={`/profile/${id}`}
                        className={cl["header__login"]}
                    >
                        {login}
                    </NavLink>
                    <button onClick={logout} className={cl.logoutBtn}>
                        Logout
                    </button>
                </div>
            ) : (
                <NavLink to="/login/" className={cl["header__login"]}>
                    Login
                </NavLink>
            )}
        </header>
    );
}

export default Header;
