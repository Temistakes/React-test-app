import React from "react";
import defaultImg from "../../assets/img/beaver.jpg";
import User from "./User/User";
import cl from "./Users.module.css";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

function Users({
    totalCount,
    usersCount,
    currentPage,
    setPage,
    portionSize,
    ...props
}) {
    let users = props.users.map(user => (
        // <NavLink to={`/profile/${user.id}`}>
        <User
            key={user.id}
            name={user.name}
            status={user.status}
            url={user.photos.small ? user.photos.small : defaultImg}
            id={user.id}
            followed={user.followed}
            follow={props.follow}
            unfollow={props.unfollow}
            followingInProgress={props.followingInProgress}
        />
        // </NavLink>
    ));

    return (
        <section className={cl.users}>
            <h1 className={cl.users__title}>Пользователи</h1>
            <Paginator
                totalCount={totalCount}
                usersCount={usersCount}
                currentPage={currentPage}
                setPage={setPage}
                portionSize={portionSize}
            />

            <div className={cl.users__items}>{users}</div>
        </section>
    );
}

export default Users;
