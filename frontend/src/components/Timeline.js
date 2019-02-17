import React, { Component } from 'react'
import { Card, Container, Row, Col, Image, Form } from 'react-bootstrap'
import Tweet from './Tweet'
import Api from '../services/Api'

export default class Timeline extends Component {

  state = { newTweet: '', tweets: [] }

  async componentDidMount () {
    const res = await Api.get('/tweets')
    this.setState( () => ( { tweets: res.data } ) )
  }

  handleValue (key, value) {
    this.setState( () => ( { [ `${key}`]: value } ) )
  }

  async handleNewTweet (event) {
    try {
      if (event.keyCode === 13) {
        const content = this.state.newTweet
        const author = localStorage.getItem('@twitter:username')
        const tweetToCreate = { content, author }
        await Api.post('/tweets', tweetToCreate)
        this.setState( () => ( { newTweet: '' } ) )
      }
    } catch (err) {
      throw err
    }
  }

  render () {
    return (
      <Card style={{ margin: 'auto', marginTop: '2%', width: '40rem', border: 'none' }}>
        <Card.Body>
          <Container>
            <Col>
              <Row className='justify-content-md-center'>
                <Image
                style={{ marginBottom: '1rem' }}
                height='30px'
                width='40px'
                rounded
                src='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png' />
              </Row>
              <Row className='justify-content-md-center'>
                <Form.Control
                as='textarea'
                rows='2'
                placeholder='O que está acontecendo ?'
                value={this.state.newTweet}
                onChange={event => this.handleValue('newTweet', event.target.value)}
                onKeyDown={this.handleNewTweet.bind(this)} />
              </Row>
              {

                this.state.tweets.map(tweet => (
                  <Tweet key={tweet._id} tweet={tweet} />
                ))
              }
            </Col>
          </Container>
        </Card.Body>
      </Card>
    )
  }
}