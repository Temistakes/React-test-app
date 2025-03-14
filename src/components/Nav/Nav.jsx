import React from "react";
import cl from "./Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav({ links }) {
    let navLinks = links.map((link, i) => {
        return (
            <NavLink
                key={i}
                to={link.url}
                className={({ isActive }) =>
                    isActive
                        ? `${cl["side-panel__link"]} ${cl["activeLink"]}`
                        : cl["side-panel__link"]
                }
            >
                {link.name}
            </NavLink>
        );
    });

    return (
        <aside className={cl["side-panel"]}>
            <nav className={cl["side-panel__nav"]}>
                <ul className={cl["side-panel__list"]}>{navLinks}</ul>
            </nav>
        </aside>
    );
}

export default Nav;
