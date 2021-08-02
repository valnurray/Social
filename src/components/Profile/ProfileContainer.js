import React, {Component} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePageReducer";

class ProfileContainer extends Component {

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            // this.props.toggleIsFetching(false);
            this.props.setUserProfile(response.data);
            // this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )

    }
}

let mapStateToProps =(state)=> ({
    profile: state.ProfilePage.profile
    });

export default connect(mapStateToProps, {setUserProfile} ) (ProfileContainer);