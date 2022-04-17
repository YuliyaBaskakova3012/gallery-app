export const FETCH_PICTURES = "FETCH_PICTURES";
export const SET_PICTURES = "SET_PICTURES";
export const CHANGE_ISLOADING="CHANGE_ISLOADING";

const initialState={
    data: [],
    isLoading: true
}
const picturesReducer=(state=initialState, action)=>{
    switch(action.type){
        case SET_PICTURES: {
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

export const setPictures=(payload)=>({type: SET_PICTURES, payload});
export const fetchUsers = () => ({type: FETCH_PICTURES});
export const changeisLoading = () => ({type: CHANGE_ISLOADING})
export default picturesReducer;