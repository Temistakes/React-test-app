import React from "react";
import cl from "./Posts.module.css";
import Post from "./Post/Post";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

// Actions Creaters

function PostsForm(props) {
    let validationSchema = yup.object().shape({
        message: yup
            .string()
            .typeError("Невалидный тип данных")
            .required("Данное поле обязательно"),
    });
    return (
        <Formik
            initialValues={{
                message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
                props.addPost(values.message);
            }}
        >
            {({ errors, touched, values }) => (
                <Form className={cl["posts__form"]}>
                    <Field
                        type="text"
                        placeholder="Message"
                        value={values.message}
                        name="message"
                        className={cl["posts__send-input"]}
                    />
                    {errors.message && touched.message ? (
                        <p className={cl.error}>{errors.message}</p>
                    ) : (
                        ""
                    )}
                    <button type="submit" className={cl["posts__send-btn"]}>
                        Отправить
                    </button>
                </Form>
            )}
        </Formik>
    );
}

function Posts(props) {
    let posts = props.posts.map(post => (
        <Post key={post.id} message={post.message} likecount={post.likecount} />
    ));

    // UI

    return (
        <div className={cl["posts"]}>
            <header className={cl["posts__header"]}>
                <h2 className={cl["posts__title"]}>Посты</h2>
            </header>

            <PostsForm addPost={props.addPost} />

            <div className={cl["posts__items"]}>{posts}</div>
        </div>
    );
}

export default Posts;
