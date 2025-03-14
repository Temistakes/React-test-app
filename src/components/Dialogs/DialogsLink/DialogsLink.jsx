import React from "react";
import cl from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

function DialogsLink({ url, id, name }) {
    return (
        <li className={cl["dialogs__list-item"]}>
            <img src={url} class={cl["dialogs__list-item-img"]} alt="" />
            <NavLink to={`/dialogs/${id}/`}>{name}</NavLink>
        </li>
    );
}

export default DialogsLink;
