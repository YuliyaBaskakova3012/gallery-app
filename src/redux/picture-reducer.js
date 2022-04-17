export const CHANGE_ISLOADING="CHANGE_ISLOADING";
export const LOAD_PICTURE="LOAD_PICTURE";
const initialState={
    isLoading: true
}
const pictureReducer=(state=initialState, action)=>{
    switch(action.type){
      case CHANGE_ISLOADING: {
            return{
                ...state,
                isLoading: false
            }
        }
        default: return state;
    }
    
}

export const changeisLoading = () => ({type: CHANGE_ISLOADING});
export const loadPicture = () => ({type: LOAD_PICTURE});
export default pictureReducer;