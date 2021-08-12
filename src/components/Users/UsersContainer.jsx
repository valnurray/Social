import React, {Component} from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChange = (numberPage) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(numberPage);
        usersAPI.getUsers(numberPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
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
        isFetching: state.UsersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);
