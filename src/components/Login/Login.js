import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from '../../images/background.jpg';
import { tryAuth } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        tryAuth: (email, password, mode) => dispatch(tryAuth(email, password, mode))
    }
}

const Login = props => {
    const [authStates, setAuthStates] = useState({
        mode: "login",
        inputs: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    const isFocused = useIsFocused();

    useEffect(() => {
        setAuthStates({
            ...authStates,
            inputs: {
                email: "",
                password: "",
                confirmPassword: "",
            }
        })
    } , [isFocused])

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
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const handleAuth = () => {
        const email = authStates.inputs.email;
        const password = authStates.inputs.password;
        const confirmPassword = authStates.inputs.confirmPassword;

        if (email !== "" && password !== "") {
            if (re.test(email)) {
                if (authStates.mode === "login") {
                    props.tryAuth(email, password, "login");
                } else {
                    if (password === confirmPassword) {
                        props.tryAuth(email, password, "signup");
                    } else {
                        alert("Password fields doesn't Match!");
                    }
                }
            } else {
                alert("Invalid Email!");
            }
        } else {
            alert("Input all the fields!")
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
                    style={{ ...styles.btnContainer, backgroundColor: "#192a56", width: "85%", paddingTop: 5, paddingBottom: 10 , borderRadius: 25}}
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
                <TouchableOpacity style={styles.btnContainer}
                    onPress={() => {
                        handleAuth()
                    }}>
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
        backgroundColor: "#ecf0f1",
        borderWidth: 1,
        borderColor: "#2980b9",
        borderRadius: 25,
        paddingLeft: 20
    },
    btnContainer: {
        flexDirection: "row",
        width: 150,
        paddingVertical: 10,
        backgroundColor: "#2c3e50",
        borderRadius: 25,
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


export default connect(mapStateToProps, mapDispatchToProps)(Login);