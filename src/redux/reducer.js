import * as actionType from './actionType';

const initState = {
    placeList: []
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
        default:
            return state;
    }
}