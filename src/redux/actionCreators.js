import { navigate } from '../NavigationRoot';
import * as actionType from './actionType';

export const addPlace = place => (dispatch , getState ) => {
    let token = getState().token;
    fetch( `https://my-places-d1c6b-default-rtdb.firebaseio.com/places.json?auth=${token}`, {
        method: "POST",
        body: JSON.stringify(place)
    })
        .catch(error => console.log(error))
        .then(response => response.json())
        .then(data => console.log(data));
}

export const setPlaces = places => {
    return {
        type: actionType.SET_PLACES,
        payload: places
    }
}

export const loadPlaces = () => (dispatch , getState )  => {
    let token = getState().token;
    fetch(`https://my-places-d1c6b-default-rtdb.firebaseio.com/places.json?auth=${token}`)
        .then(res => res.json())
        .then(data => {
            const places = [];
            for (let key in data) {
                places.push({
                    ...data[key],
                    key: key
                })
            }
            dispatch(setPlaces(places));
        });
}


export const deletePlace = key => {
    return {
        type: actionType.DELETE_PLACE,
        payload: key
    }
}

export const authUser = token => {
    return {
        type: actionType.AUTHENTICATE_USER,
        payload: token,
    }
}

export const tryAuth = (email, password, mode) => dispatch => {
    let url = "";
    if(mode == "signup"){
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCTg7TtUfQTJ5JCTi38x5ftQAOzqkT3vRs";
    }else if(mode == "login"){
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTg7TtUfQTJ5JCTi38x5ftQAOzqkT3vRs";
    }
    
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error.message);
            } else {
                dispatch(authUser(data.idToken));
                navigate("Places");
                
            }
            console.log(data)
        })

}
