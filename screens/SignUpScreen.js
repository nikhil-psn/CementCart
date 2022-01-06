import React from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native'
import { auth } from "../firebase"

const SignUpScreen = ({navigation}) => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const createAccount = () =>{
    if(email.length<1){
      console.log("Email cannot be empty")
    }
    else if(password.length<8){
      console.log("Password cannot be less than 8 characters")
    }
    else{
      console.log("Good to go!")
      auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user is : ", user)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        // ..
      });
    }
  }

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignUp Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        value={password}
        placeholder="Password"
      />
      <Button
        title="Create an Account"
        onPress={createAccount}
      />
      <Button
      style={styles.button}
        title="Already have an Account?  Sign In"
        onPress={() => navigation.push('Login')}
      />
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button:{
    marginTop:120
  }
});
