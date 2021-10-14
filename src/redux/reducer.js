import * as actionType from './actionType';

const initState = {
    placeList: [],
    isAuth: false,
    token: null
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ADD_PLACE:
            return {
                ...state,
                placeList: state.placeList.concat(action.payload)
            }
        case actionType.DELETE_PLACE:
            return {
                ...state,
                placeList: state.placeList.filter(place => place.key !== action.payload)
            }
        case actionType.SET_PLACES:
            return {
                ...state,
                placeList: action.payload
            }
        case actionType.AUTHENTICATE_USER:
            return{
                ...state,
                isAuth: true,
                token: action.payload
            }
        default:
            return state;
    }
}
