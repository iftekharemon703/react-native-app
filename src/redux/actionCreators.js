import * as actionType from './actionType';

export const addPlace = place => {
    return{
        type: actionType.ADD_PLACE,
        payload: place
    }
}

export const deletePlace = key => {
    return {
        type: actionType.DELETE_PLACE,
        payload: key
    }
}