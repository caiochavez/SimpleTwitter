import React, { Component } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, AsyncStorage, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Api from '../services/Api'

class New extends Component {
  
  static navigationOptions = {
    header: null
  }

  state = { newTweet: '' }

  goBack () {
    this.props.navigation.pop()
  }

  handleValue (key, value) {
    this.setState( () => ( { [`${key}`]: value } ) )
  }

  handleTweet = async () => {
    const author = await AsyncStorage.getItem('@twitter:username')
    const content = this.state.newTweet
    await Api.post('tweets', { author, content })
    this.goBack()
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.goBack()}>
            <Icon name='close' size={24} color='#4BB0EE' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.handleTweet} disabled={!this.state.newTweet}>
            <Text style={styles.buttonText}>
              Tweetar
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
        style={styles.input}
        multiline
        placeholder='O quê está acontecendo ?'
        placeholderTextColor='#999'
        value={this.state.newTweet}
        onChangeText={text => this.handleValue('newTweet', text)}
        returnKeyType='send'
        onSubmitEditing={this.handleTweet} />
      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  button: {
    height: 32,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: "#4BB0EE",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },

  input: {
    margin: 20,
    fontSize: 16,
    color: "#333"
  }
})

export default New