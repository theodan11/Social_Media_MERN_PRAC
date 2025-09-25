export const UpdateReducer = (state, action) => {
    switch (action.type) {
        case "FOLLOW_USER":

            let updatedFollowUserCopy = {
                ...state.user,

                followings: [...state.user.followings, action.payload]
            }
            return {
                ...state,
                user:
                    updatedFollowUserCopy

            }



        case "UNFOLLOW_USER":

            let updatedUnfollowUserCopy = {
                ...state.user,
                followings: state.user.followings.filter((following) => following != action.payload)
            }
            return {
                ...state,
                user: updatedUnfollowUserCopy
            }

        default:
            return state
    }
}