import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpeg";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChange(p)
                             }}>{p}</span>
            })}

        </div>

        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                            </NavLink>

                        </div>
                        <div>
                             {
                                 u.followed
                                     ?
                                     <button onClick={() => {

                                         axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                             withCredentials: true,
                                             headers: {
                                                 "API-KEY" : "8885ff3c-397c-4f00-abf1-fdb595df5be0"
                                             }
                                         })
                                             .then(response => {
                                                 if (response.data.resultCode === 0) {
                                                     props.unfollow(u.id)
                                                 }
                                             });
                                     }}> Unfollow </button>

                                     : <button onClick={() => {
                                         axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                             withCredentials: true,
                                             headers: {
                                                 "API-KEY" : "8885ff3c-397c-4f00-abf1-fdb595df5be0"
                                             }
                                         })
                                             .then(response => {
                                                 if (response.data.resultCode === 0) {
                                                     props.follow(u.id)
                                                 }
                                             });
                                     }}> Follow </button>
                             }
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>

            </div>)
        }
    </div>
}

export default Users;