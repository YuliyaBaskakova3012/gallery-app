export const FETCH_USERS = "FETCH_USERS";
export const SET_USERS = "SET_USERS";
export const CHANGE_ISLOADING="CHANGE_ISLOADING";

const initialState={
    data: [],
    isLoading: true
}
const picturesReducer=(state=initialState, action)=>{
    switch(action.type){
        case SET_USERS: {
         return{
            ...state,
            data: action.payload
         }   
        }
        case CHANGE_ISLOADING: {
            return{
                ...state,
                isLoading: false
            }
        }
        default: return state;
    }
    
}

export const setUsers=(payload)=>({type: SET_USERS, payload});
export const fetchUsers = () => ({type: FETCH_USERS});
export const changeisLoading = () => ({type: CHANGE_ISLOADING})
export default picturesReducer;