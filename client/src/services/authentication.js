import axios from 'axios'


export const login = (user) => {
    return axios.post('localhost:3000/users/login', user).then(token => {
        return {
            status: 'success',
            token
        }
    })
}