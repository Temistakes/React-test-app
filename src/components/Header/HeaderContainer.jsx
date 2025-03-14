import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux/authReducer";
import { compose } from "redux";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                logout={this.props.logout}
                id={this.props.id}
            />
        );
    }
}

let mapStateToProps = state => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    id: state.auth.id,
});

export default compose(
    connect(mapStateToProps, {
        logout,
    }),
)(HeaderContainer);
