import React from "react";
import cl from "./Dialogs.module.css";
import DialogsLink from "./DialogsLink/DialogsLink";
import Message from "./Message/Message";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

function DialogsForm({ addMessage, ...props }) {
    let validationSchema = yup.object().shape({
        message: yup.string().required("Данное поле обязательно"),
    });

    return (
        <Formik
            initialValues={{
                message: "",
            }}
            onSubmit={values => {
                addMessage(values.message);
            }}
            validationSchema={validationSchema}
        >
            {({ errors, touched, values }) => (
                <Form className={cl["dialog__form"]}>
                    <Field
                        type="text"
                        className={cl["dialog__input"]}
                        placeholder="Message"
                        value={values.message}
                        name="message"
                    />
                    {errors.message && touched.message ? (
                        <p className={cl.error}>{errors.message}</p>
                    ) : (
                        ""
                    )}
                    <button type="submit" className={cl["dialog__send-btn"]}>
                        Отправить
                    </button>
                </Form>
            )}
        </Formik>
    );
}

function Dialogs({ dialogs, messages, addMessage, ...props }) {
    let dialogsElements = dialogs.map(dialog => (
        <DialogsLink
            key={dialog.id}
            id={dialog.id}
            name={dialog.name}
            url={dialog.url}
        />
    ));

    let messagesElements = messages.map(message => (
        <Message key={message.id} text={message.text} isMe={message.isMe} />
    ));

    // UI

    return (
        <section className={cl["dialogs"]}>
            <div className={cl["dialogs__items"]}>
                <ul className={cl["dialogs__list"]}>{dialogsElements}</ul>
            </div>

            <div className={cl["dialog"]}>
                <div className={cl["dialog__messages"]}>{messagesElements}</div>

                <DialogsForm addMessage={addMessage} />
            </div>
        </section>
    );
}

export default Dialogs;
