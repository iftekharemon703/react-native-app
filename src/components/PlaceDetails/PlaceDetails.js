import React from 'react';
import { View, Modal, Image, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlaceDetail = props => {
    return (
        <Modal>
            <View>
                <Image source={props.place.image} style={{
                    width: "100%",
                    height: 300
                }} />
                <Text style={{
                    textAlign: "center",
                    fontSize: 40
                }}>{props.place.value}</Text>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={
                            () => {
                                props.handleDeleteItem(props.place.key);
                            }
                        }>
                        <Icon name="trash" size={30} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => props.handleHideModal()}>
                        <Icon name="times-circle" size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default PlaceDetail;