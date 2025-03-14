import { getUsers, follow, unfollow, setPage } from "../../redux/usersReducer";
import { connect } from "react-redux";
import Users from "./Users";
import React from "react";
import Loader from "../common/Loader/Loader";
import { compose } from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getStateUsers,
    getTotalCount,
    getUsersCount,
    getFollowingInProgress,
    getFilteredUsers,
    getPortionSize,
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    render = () => {
        // console.log("RERENDER");
        return (
            <>
                <Users
                    totalCount={this.props.totalCount}
                    usersCount={this.props.usersCount}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    setPage={this.props.setPage}
                    followingInProgress={this.props.followingInProgress}
                    portionSize={this.props.portionSize}
                />
                {this.props.isFetching ? <Loader /> : ""}
            </>
        );
    };

    componentDidMount = () => {
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.usersCount);
        }
    };
}

const mapStateToProps = state => {
    // console.log("mapDispatchToProps");
    return {
        users: getFilteredUsers(state),
        totalCount: getTotalCount(state),
        usersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setPage,
        getUsers,
    }),
)(UsersContainer);
