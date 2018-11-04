import axios from 'axios'
import { endpoint } from '../endpoint/endpoint'

console.log(endpoint)
export const login = (user) => {
    return axios.post(endpoint+'/users/login', user).then(userItem => {
        return {
            userItem
        }
    })
}
