import * as types from '../type/type';

const initialState = {
    users:[],
    user:{}
}
const allReducers = (state = initialState,action) => {
    switch (action.type) {

        case types.ADD_STUDENT:
            return{
                ...state
            }
            break;

        case types.GET_STUDENTS:
            return{
                ...state,
                users:action.payload
            }
            break;

        case types.GOING_SINGLE:
            return{
                ...state,
                user:action.payload
            }
            break;

        case types.EDIT_UPDATE:
            return{
                ...state
            }
            break;
    
        default:
            return state
            break;
    }
}
export default allReducers;