import React from "react";
import cl from "./Login.module.css";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { login, auth } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";

function LoginForm({ isAuth, login, auth, isProcessed, ...props }) {
    if (isAuth) return <Navigate to="/profile/" />;

    let validationSchema = yup.object().shape({
        email: yup
            .string()
            .typeError("Данное поле должно быть строкой")
            .email("Данное поле должно быть email")
            .required("Данное поле обязательно"),
        password: yup
            .string()
            .typeError("Данное поле должно быть строкой")
            .required("Данное поле обязательно"),
        confirmPassword: yup
            .string()
            .typeError("Данное поле должно быть строкой")
            .oneOf([yup.ref("password")], "Пароли не совпадают")
            .required("Данное поле обязательно"),
    });

    function serverValidation(values, actions) {
        login({
            email: values.email,
            password: values.password,
            rememberMe: values.rememberMe,
        })
            .then(() => {
                auth();
                actions.setSubmitting(false);
            })
            .catch(err => {
                actions.setErrors({ globalError: err });
                actions.setSubmitting(false);
            });
    }

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
                rememberMe: false,
                globalError: "",
            }}
            onSubmit={serverValidation}
            validationSchema={validationSchema}
        >
            {({ errors, touched, values }) => (
                <Form className={cl.login__form}>
                    <Field
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={values.login}
                    />
                    {errors.email && touched.email ? (
                        <p className={cl.error}>{errors.email}</p>
                    ) : (
                        ""
                    )}
                    <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                    />
                    {errors.password && touched.password ? (
                        <p className={cl.error}>{errors.password}</p>
                    ) : (
                        ""
                    )}
                    <Field
                        type="password"
                        placeholder="Confirm password"
                        value={values.confirmPassword}
                        name="confirmPassword"
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                        <p className={cl.error}>{errors.confirmPassword}</p>
                    ) : (
                        ""
                    )}
                    <div className={cl.login__checkbox}>
                        <Field
                            type="checkbox"
                            name="rememberMe"
                            checked={values.rememberMe}
                            id="rememberMe"
                        />
                        <label htmlFor="rememberMe">Remember Me</label>
                    </div>
                    <Field hidden name="globalError" type="hidden" />
                    {errors.globalError && touched.globalError ? (
                        <p className={cl.error}>{errors.globalError}</p>
                    ) : (
                        ""
                    )}

                    <button disabled={isProcessed} type="submit">
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}

function Login(props) {
    return (
        <section className={cl.login}>
            <h1 className={cl.login__title}>Login</h1>
            <LoginForm {...props} />
        </section>
    );
}

let mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    isProcessed: state.auth.isProcessed,
});

export default connect(mapStateToProps, {
    login,
    auth,
})(Login);
