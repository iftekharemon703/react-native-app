import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from '../../images/background.jpg';

const Login = props => {
    const [authStates, setAuthStates] = useState({
        mode: "login",
        inputs: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    const switchViews = () => {
        setAuthStates({
            ...authStates,
            mode: authStates.mode === "login" ? "signup" : "login",
            inputs: {
                email: "",
                password: "",
                confirmPassword: "",
            }
        })
    }

    const updateInputs = (value, name) => {
        setAuthStates({
            ...authStates,
            inputs: {
                ...authStates.inputs,
                [name]: value
            }
        })
    }

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleAuth = () => {
        const email = authStates.inputs.email;
        const password = authStates.inputs.password;
        const confirmPassword = authStates.inputs.confirmPassword;

        if(email !== "" && password !== ""){
            if(re.test(email)){
                if(authStates.mode == "login"){
                    props.navigation.navigate("Home");
                }else{
                    if(password === confirmPassword){
                        props.navigation.navigate("Home")
                    }else{
                        alert("Password field cannot match")
                    }
                }
            }else{
                alert("Invalid Email")
            }
        }else{
            alert("Input all the field")
        }
    }

    let confirmPassField = null;
    if (authStates.mode === "signup") {
        confirmPassField = (
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={authStates.inputs.confirmPassword}
                onChangeText={value => updateInputs(value, "confirmPassword")}
            />
        );
    }
    return ( 
        <ImageBackground
            source={backgroundImage}
            style={{ width: "100%", flex: 1 }}
            blurRadius={5}>
            <View style={styles.loginView}>
                <TouchableOpacity
                    style={{ ...styles.btnContainer, backgroundColor: "#1167b1", width: "85%", paddingBottom: 5 }}
                    onPress={
                        () => switchViews()
                    }
                >
                    <Text style={styles.btnStyle}>{authStates.mode === "login" ? "Switch to Sign Up" : "Switch to Login"}</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Your Email Address"
                    value={authStates.inputs.email}
                    onChangeText={value => updateInputs(value, "email")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={authStates.inputs.password}
                    onChangeText={value => updateInputs(value, "password")}
                />
                {confirmPassField}
                <TouchableOpacity 
                    style={styles.btnContainer} 
                    onPress={() => handleAuth()} >
                    <Text style={styles.btnStyle}>{authStates.mode === "login" ? "Login" : "Sign Up"}</Text>
                </TouchableOpacity>
            </View >
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    loginView: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: "85%",
        padding: 5,
        marginTop: 10,
        backgroundColor: "#eee",
        borderWidth: 1,
        borderColor: "#009688",
        borderRadius: 4
    },
    btnContainer: {
        flexDirection: "row",
        width: 150,
        paddingVertical: 5,
        backgroundColor: "#009688",
        borderRadius: 5,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    btnStyle: {
        fontSize: 16,
        color: "#fff",
        alignSelf: "center"
    }
})


export default Login;