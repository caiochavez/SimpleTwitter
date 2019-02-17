import React, { Component } from 'react'
import { Row, ListGroup } from 'react-bootstrap'

class Tweet extends Component {

  render () {
    const { author, content, likes } = this.props.tweet
    return (
      <Row sm={12} className='justify-content-md-center'>
        <ListGroup.Item>{ content }</ListGroup.Item>
      </Row>
    )
  }

}

export default Tweet