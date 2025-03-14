import React from "react";
import cl from "./Loader.module.css";
import loader from "../../../assets/img/loader.gif";

function Loader(props) {
    return (
        <div className={cl.loader}>
            <img src={loader} alt="" />
        </div>
    );
}

export default Loader;
