const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbYYoQtVusBGIbEgOo3dyyL2k2AAFqSu6lDm0XJEQ-5kX3mTKqO5oRZoNoyPMr9-Ht2I&usqp=CAU",
        //     followed: false,
        //     fullName: 'Dmitriy',
        //     status: 'fine',
        //     location: {city: 'Kharkiv', country: 'Ukraine'}
        // },
        // {
        //     id: 2,
        //     photoUrl: "https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255532-stock-illustration-profile-placeholder-male-default-profile.jpg",
        //     followed: true,
        //     fullName: 'Sergiy',
        //     status: 'pretty',
        //     location: {city: 'Dnipro', country: 'Ukraine'}
        // },
        // {
        //     id: 3,
        //     photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG67uD0aKEhLg9BEZ0ZYsnYmrBS34R7g14hg&usqp=CAU",
        //     followed: true,
        //     fullName: 'Dasha',
        //     status: 'in love',
        //     location: {city: 'Lviv', country: 'Ukraine'}
        // },
        // {
        //     id: 4,
        //     photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKKu2UGtgA7_2NI8SKzDqhcEHeaLPKHvcrnqncxTQ6xMdj0rB10m8xi1cXbMG3uMNmxHE&usqp=CAU",
        //     followed: false,
        //     fullName: 'Masha',
        //     status: 'status',
        //     location: {city: 'Kharkiv', country: 'Ukraine'}
        // }
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;