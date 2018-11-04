import axios from 'axios'
import { endpoint } from '../endpoint/endpoint'

export const getCategory = () => {
    return axios.get(endpoint+'/course/getCategory').then( (result) => {
        return result
    })
}

export const createCourse = (course) => {
    return axios.post(endpoint+'/course/createCourse', course).then( (result) => {
        return result
    })
}