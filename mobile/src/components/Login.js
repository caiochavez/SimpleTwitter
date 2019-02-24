import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class Login extends Component {

  state = { username: '' }

  async componentDidMount () {
    const username = await AsyncStorage.getItem('@twitter:username')
    if (username) this.props.navigation.navigate('App')
  }

  handleValue (key, value) {
    this.setState( () => ( { [`${key}`]: value } ) )
  }

  async handleLogin () {
    const { username } = this.state
    await AsyncStorage.setItem('@twitter:username', username)
    this.props.navigation.navigate('App')
  }
  
  render () {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.content}>
          <View>
            <Icon name='twitter' size={64} color='#4BB0EE' />
          </View>
          <TextInput
           style={styles.input}
           placeholder='Nome de Usuário'
           value={this.state.username}
           onChangeText={ text => this.handleValue('username', text) }
           onSubmitEditing={this.handleLogin.bind(this)}
           returnKeyType='send' />
           <TouchableOpacity
           disabled={!this.state.username}
           onPress={this.handleLogin.bind(this)}
           style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
           </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 30
  },

  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    backgroundColor: "#4BB0EE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
})

export default Login