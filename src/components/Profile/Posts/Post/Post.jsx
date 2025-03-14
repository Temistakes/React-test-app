import React from "react";
import cl from "./Post.module.css";

function Post(props) {
    return (
        <article className={cl["post"]}>
            <img
                src="https://png.pngtree.com/thumb_back/fw800/background/20240321/pngtree-sunset-kisses-the-mountains-painting-sky-image_15656527.jpg"
                alt=""
                className={cl["post__img"]}
            />
            <p className={cl["post__text"]}>
                {props.message} | Количество лайков: {props.likecount}
            </p>
            <button className={cl["post__like"]}>Like</button>
        </article>
    );
}

export default Post;
