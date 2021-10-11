import React, { useState } from 'react';
import InputPlace from '../InputPlace/InputPlace';
import { addPlace } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import { View , Button } from 'react-native';
import PickImage from '../PickImage/PickImage';

const mapDispatchToProps = dispatch => {
    return {
        addPlace: place => dispatch(addPlace(place))
    }
}

const SharePlaces = props => {
    const [inputValue, setInputValue] = useState("");
    const [image , setImage] = useState('');

    const handleAddingPlaces = () => {
        if (inputValue === "" || image === ""){
            if(image === ""){
                alert("Pick An Image")
            }
        }
        else{
            props.addPlace( {
                key: Math.random().toString(),
                value: inputValue,
                image: image
            });
            setInputValue("");
            setImage("");
            props.navigation.navigate("Find Places")
        }
    }
    return (
        <View>
            <PickImage image={image} setImage={setImage} />
            <InputPlace
                inputValue={inputValue}
                setInputValue={setInputValue}
                addPlace={props.addPlace}
            />
            <View style={{alignItems: 'center'}}>
                <Button
                    title="Add"
                    onPress={() => {
                        handleAddingPlaces();
                    }}
                />
            </View>
            
        </View>
    );
};

export default connect(null , mapDispatchToProps) (SharePlaces);