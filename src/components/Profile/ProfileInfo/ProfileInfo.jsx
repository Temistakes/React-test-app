import React from "react";
import cl from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo({ name, descr, updateStatus, status, img, ...props }) {
    return (
        <div className={cl["profile__user-row"]}>
            <img src={img} alt="" className={cl["profile__user-img"]} />

            <div className={cl["profile__user-info"]}>
                <h1 className={cl["profile__name"]}>{name}</h1>
                <p className={cl["profile__desc"]}>{descr}</p>
                <ProfileStatus updateStatus={updateStatus} status={status} />
            </div>
        </div>
    );
}

export default ProfileInfo;
