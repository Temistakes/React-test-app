import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
});

const withAuthRedirect = Component => {
    const ContainerComponent = props => {
        if (!props.isAuth) return <Navigate to="/login/" />;
        return <Component {...props} />;
    };

    return connect(mapStateToProps)(ContainerComponent);
};

export default withAuthRedirect;
