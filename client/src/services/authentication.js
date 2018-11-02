import axios from 'axios'


export const login = (user) => {
    return axios.post('http://localhost:5000/users/login', user).then(userItem => {
        return {
            userItem
        }
    })
}
