import React from "react";
import cl from "../Dialogs.module.css";

function Message(props) {
    return (
        <div
            className={`${cl["message"]} ${props.isMe ? cl["message_me"] : ""}`}
        >
            <p className={cl["message__text"]}>{props.text}</p>
        </div>
    );
}

export default Message;
