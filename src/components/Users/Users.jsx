import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {

    if (props.users.length ===0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbYYoQtVusBGIbEgOo3dyyL2k2AAFqSu6lDm0XJEQ-5kX3mTKqO5oRZoNoyPMr9-Ht2I&usqp=CAU",
                    followed: false,
                    fullName: 'Dmitriy',
                    status: 'fine',
                    location: {city: 'Kharkiv', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoUrl: "https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255532-stock-illustration-profile-placeholder-male-default-profile.jpg",
                    followed: true,
                    fullName: 'Sergiy',
                    status: 'pretty',
                    location: {city: 'Dnipro', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG67uD0aKEhLg9BEZ0ZYsnYmrBS34R7g14hg&usqp=CAU",
                    followed: true,
                    fullName: 'Dasha',
                    status: 'in love',
                    location: {city: 'Lviv', country: 'Ukraine'}
                },
                {
                    id: 4,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKKu2UGtgA7_2NI8SKzDqhcEHeaLPKHvcrnqncxTQ6xMdj0rB10m8xi1cXbMG3uMNmxHE&usqp=CAU",
                    followed: false,
                    fullName: 'Masha',
                    status: 'status',
                    location: {city: 'Kharkiv', country: 'Ukraine'}
                }
            ]
        );
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                                       {u.followed
                                           ? <button onClick={() => {props.unfollow(u.id)}}> Unfollow </button>
                                           : <button onClick={() => {props.follow(u.id)}}> Follow </button>
                                       }
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>

            </div>)
        }
    </div>

}
export default Users;