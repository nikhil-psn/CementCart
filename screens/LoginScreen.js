import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native'
import { auth, db } from "../firebase"

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

    useEffect(() => {
        console.log("In login screen")
        db.collectionGroup("orders").onSnapshot(snapshot => {
          console.log(snapshot.docs.map(doc => doc.data()))
        })
        return () => {
            // cleanup
        }
    }, [])

    const login = () =>{
      if(email.length<1){
        console.log("Email cannot be empty")
      }
      else if(password.length<8){
        console.log("Password cannot be less than 8 characters")
      }
      else{
        console.log("Good to go!")
        auth.signInWithEmailAndPassword(email, password)
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
        <Text>Login Screen</Text>
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
          title="Login"
          onPress={login}
        />
        <Button
          title="Go to SignUp"
          onPress={() => navigation.push('SignUp')}
        />
      </View>
    )
}

export default LoginScreen

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
