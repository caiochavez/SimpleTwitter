import React, { Component } from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import socket from 'socket.io-client'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Api from '../services/Api'
import Tweet from './Tweet'

class TimeLine extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Início',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('New')}>
        <Icon style={{ marginRight: 15 }} name='add-circle-outline' size={24} color='#4BB0EE' />
      </TouchableOpacity>
    )
  })

  state = { tweets: [] }

  async componentDidMount () {
    this.subscribeEvents()
    const tweets = (await Api.get('tweets')).data
    this.setState( () => ( { tweets } ) )
  }

  subscribeEvents () {
    const io = socket('http://192.168.0.105:3000')
    io.on('tweet', data => {
      this.setState( state => ( { tweets: [ data, ...state.tweets ] } ) )
    })
    io.on('like', data => {
      this.setState( state => {
        const tweets = state.tweets.map(tweet => tweet._id === data._id ? data : tweet)
        return { tweets }
      })
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
        data={this.state.tweets}
         keyExtractor={tweet => tweet._id}
         renderItem={ ({ item }) => <Tweet tweet={item} /> } />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
})

export default TimeLine