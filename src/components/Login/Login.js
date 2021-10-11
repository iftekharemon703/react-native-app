import React from 'react';
import { Button, Text, View } from 'react-native';

const Login = props => {
    return (
        <View>
            <Text>
                Login Screen
            </Text>
            <Button title="Login" onPress={() => props.navigation.navigate('Home')}
            />
        </View>
    );
};

export default Login;