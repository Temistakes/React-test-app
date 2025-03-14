import React from "react";
import cl from "./User.module.css";

function User(props) {
    let follow = (id) => {
        props.follow(id);
    };
    let unfollow = (id) => {
        props.unfollow(id);
    };
    return (
        <article className={cl.user}>
            <div className={cl.user__column}>
                <img src={props.url} alt="" className={cl.user__img} />

                {props.followed ? (
                    <button
                        onClick={() => unfollow(props.id)}
                        className={cl.user__btn}
                        disabled={props.followingInProgress.some(
                            (id) => props.id === id
                        )}
                    >
                        Unfollow
                    </button>
                ) : (
                    <button
                        onClick={() => follow(props.id)}
                        className={cl.user__btn}
                        disabled={props.followingInProgress.some(
                            (id) => props.id === id
                        )}
                    >
                        Follow
                    </button>
                )}
            </div>

            <div className={cl.user__column}>
                <b className={cl.user__name}>{props.name}</b>
                <p className={cl.user__descr}>{props.descr}</p>
                {/* <span className={cl.user__adress}>
                    Adress: {props.adress.country}, {props.adress.city}
                </span> */}
            </div>
        </article>
    );
}

export default User;
