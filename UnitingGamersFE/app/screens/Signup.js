import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/login/Background'
import Logo from '../components/login/Logo'
import Header from '../components/login/Header'
import Button from '../components/login/Button'
import TextInput from '../components/login/TextInput'
import BackButton from '../components/login/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { usernameValidator } from '../helpers/usernameValidator'
import axios from "axios";

export default function Signup({ navigation }) {
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [username, setUsername] = useState({ value: '', error: '' })

    const onSignUpPressed = async () => {
        const nameError = nameValidator(name.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        const usernameError = usernameValidator(username.value)
        
        if (emailError || passwordError || nameError || usernameError) {
            setName({ ...name, error: nameError })
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            setUsername({ ...username, error: usernameError })
            return;
        }

        let url = "https://unitinggamers.azurewebsites.net/api/auth/signup";
        const body = { name: name.value, username: username.value, email: email.value, password: password.value};
        try {
            const signupResponse = await axios.post(url, body);
            if (signupResponse.status == 201) {
                navigation.navigate('Login');
                return;
            } else {
                Alert.alert("Oops", "User Already Exists", [{ text: "OK", onPress: () => console.log("OK Pressed")}]);
                return;
            }
        } catch(err) {
            console.log(err); // Create field to show user already exist error
            return;
        }
    }

    return (
        <Background>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <BackButton goBack={navigation.goBack} /> */}
                <Logo />
                <Header>Create Account</Header>
                <TextInput
                    label="Name"
                    returnKeyType="next"
                    value={name.value}
                    onChangeText={(text) => setName({ value: text, error: '' })}
                    error={!!name.error}
                    errorText={name.error}
                />
                <TextInput
                    label="Email"
                    returnKeyType="next"
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: '' })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
                <TextInput
                    label="Username"
                    returnKeyType="next"
                    value={username.value}
                    onChangeText={(text) => setUsername({ value: text, error: '' })}
                    error={!!username.error}
                    errorText={username.error}
                />
                <TextInput
                    label="Password"
                    returnKeyType="done"
                    value={password.value}
                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                />
                <Button mode="contained" onPress={onSignUpPressed} style={{ marginTop: 24 }}>
                    Sign Up
                </Button>
                <View style={styles.row}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.replace('Login')}>
                        <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Background>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})
