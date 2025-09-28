export const FollowUser = (userId) => {
    return {
        type: "FOLLOW_USER",
        payload: userId
    }
}

export const UnfollowUser = (userId) => {
    return {
        type: "UNFOLLOW_USER",
        payload: userId
    }
}

