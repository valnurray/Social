import React, {Component} from "react";
import {connect} from "react-redux";
import {
    follow, getUsers, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollow
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChange = (numberPage) => {
        this.props.getUsers(numberPage, this.props.pageSize);
    }


    render() {

        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null
            }
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChange={this.onPageChange}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress ={this.props.followingInProgress}

            />
        </>

    }
}

const mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress,
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,

    setCurrentPage,


    toggleIsFollowingProgress,
    getUsers,
})(UsersContainer);
