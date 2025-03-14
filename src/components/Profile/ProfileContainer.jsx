import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
    getProfile,
    getStatus,
    updateStatus,
} from "../../redux/profileReducer";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
    getAuthId,
    getIsAuth,
    getStateProfile,
    getStateStatus,
} from "../../redux/profileSelectors";

class ProfileContainer extends React.Component {
    render() {
        const { id, status, profile, updateStatus } = this.props;
        if (!this.props.id) return <Navigate to="/login/" />;
        return (
            <Profile
                {...this.props}
                status={status}
                profile={profile}
                updateStatus={updateStatus}
            />
        );
    }

    componentDidMount() {
        const { id, getProfile, getStatus } = this.props;
        getProfile(id);
        getStatus(id);
    }
}

const mapStateToProps = state => ({
    profile: getStateProfile(state),
    status: getStateStatus(state),
    authId: getAuthId(state),
    isAuth: getIsAuth(state),
});

const ParamsWrapper = props => {
    let params = useParams();
    let navigate = useNavigate();
    return (
        <ProfileContainer
            {...props}
            id={
                params.id
                    ? params.id
                    : props.isAuth
                    ? props.authId
                    : navigate("/login/")
            }
        />
    );
};

export default compose(
    connect(mapStateToProps, {
        getProfile,
        getStatus,
        updateStatus,
    }),
)(ParamsWrapper);
