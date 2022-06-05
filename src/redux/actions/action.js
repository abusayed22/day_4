import * as types from '../type/type'
import axios from 'axios'

const add_data = () => {
    return {
        type:types.ADD_STUDENT
    }
}
export const pre_add_data = (allStudents) => {
    return(dispatch) => {
        axios.post('http://127.0.0.1:8000/api/students',allStudents)
        .then( res =>  {
            dispatch(add_data())
        })
        .catch( err => console.log(err))
    }
}

const get_data = (data) => {
    return {
        type:types.GET_STUDENTS,
        payload:data
    }
}
export const pre_get_data = () => {
    return (dispatch) => {
        axios.get('http://127.0.0.1:8000/api/students')
        .then( res => {
            dispatch(get_data(res.data.students))
        })
        .catch( err => console.log(err))
    }
}


const delete_data = () => {
    return{
        type:types.DELETE_STUDENT
    }
}
export const pre_delete_data = (id) => {
    return(dispatch) => {
        axios.delete(`http://127.0.0.1:8000/api/students/${id}`)
        .then(res => {dispatch(delete_data())
            dispatch(get_data())
            })
        .catch(err => console.log(err))
    }
}


const go_edit = (data) => {
    return{
        type:types.GOING_SINGLE,
        payload:data
    }
}
export const pre_go_edit = (id) => {
    return(dispatch)=> {
        axios.get(`http://127.0.0.1:8000/api/students/${id}`)
        .then(res => {
            dispatch(go_edit(res.data.student))
        })
    }
}

const edit_update = () => {
    return{
        type:types.EDIT_UPDATE
    }
}
export const pre_edit_update = (id,single) => {
    return(dispatch) => {
        axios.put(`http://127.0.0.1:8000/api/students/${id}`,single)
        .then( res => {
            dispatch(edit_update())
            dispatch(get_data())
        })
        .catch(err => console.log(err))
    }
}