export const CHANGE_IS_LOADING="CHANGE_ISLOADING";
export const LOAD_PICTURE="LOAD_PICTURE";
const initialState={
    isLoading: true
}
const pictureReducer=(state=initialState, action)=>{
    switch(action.type){
      case CHANGE_IS_LOADING: {
            return{
                ...state,
                isLoading: false
            }
        }
        default: return state;
    }  
}

export const changeIsLoading = () => ({type: CHANGE_IS_LOADING});
export const loadPicture = () => ({type: LOAD_PICTURE});
export default pictureReducer;