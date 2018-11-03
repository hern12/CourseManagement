import axios from 'axios'

export const getUserProfile = (userLogin) => {
    return axios.post('http://localhost:5000/users/getUserProfile', userLogin, {
        headers: { Authorization: "Bearer " + userLogin[0].Username }
    }).then((result) => {
        return result
    })
}

export const updateUserProfile = (userProfile) => {
    return axios.post('http://localhost:5000/users/updateUserProfile', userProfile.userProfile, {
        headers: { Authorization: "Bearer " + userProfile.token[0].Username }
    }).then((result) => {
        return result
    })
}