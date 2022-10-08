export const FETCH_PICTURES = "FETCH_PICTURES";
export const SET_PICTURES = "SET_PICTURES";
export const CHANGE_IS_LOADING = "CHANGE_IS_LOADING";

const initialState = {
  data: [],
  isLoading: true
}
const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PICTURES: {
      return {
        ...state,
        data: action.payload
      }   
    }
    case CHANGE_IS_LOADING: {
      return {
        ...state,
        isLoading: false
      }
    }
      default: return state;
  }   
}

export const setPictures = (payload) => ({type: SET_PICTURES, payload});
export const fetchPictures = () => ({type: FETCH_PICTURES});
export const changeisLoading = () => ({type: CHANGE_IS_LOADING})
export default galleryReducer;
