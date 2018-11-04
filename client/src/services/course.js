import axios from 'axios'
import { endpoint } from '../endpoint/endpoint'


export const getCourse = () => {
    return axios.get(endpoint+'/course/getCourse').then( (result) => {
        return result
    })
}

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


export const searchCourse = (criteria) => {
    return axios.get(endpoint+'/course/searchCourse', {
        params: {
            courseName: criteria.courseName,
            startDate: criteria.startDate,
            endDate: criteria.endDate
        }
    }).then( result => {
        return result
    })
}