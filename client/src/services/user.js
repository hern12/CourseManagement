import axios from 'axios'
import { endpoint } from '../endpoint/endpoint'

export const getUserProfile = (userLogin) => {
    return axios.post(endpoint+'/users/getUserProfile', userLogin, {
        headers: { Authorization: "Bearer " + userLogin[0].Username }
    }).then((result) => {
        return result
    })
}

export const updateUserProfile = (userProfile) => {
    return axios.post(endpoint+'/users/updateUserProfile', userProfile.userProfile, {
        headers: { Authorization: "Bearer " + userProfile.token[0].Username }
    }).then((result) => {
        return result
    })
}