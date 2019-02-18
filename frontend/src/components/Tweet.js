import React, { Component } from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import LikeBlank from '../assets/like-blank.svg'
import LikeFull from '../assets/like-full.svg'
import Api from '../services/Api'

class Tweet extends Component {

  state = { liked: false }

  async addLike () {
    const { _id } = this.props.tweet
    await Api.post(`/likes/${_id}`)
    this.setState( () => ( { liked: true } ) )
  }

  render () {
    const { author, content, likes } = this.props.tweet
    const { liked } = this.state
    const { colorText } = styles
    return (
      <Row sm={12} style={{ marginTop: '1rem' }} className='justify-content-md-flex-start'>
        <Col>
          <Row style={{ paddingBottom: 5 }}>
            <strong>{ author }</strong>
          </Row>
          <Row style={{ paddingBottom: 7 }}>
            <p style={{ margin: 0, ...colorText }}>{ content }</p>
          </Row>
          <Row>
            <img
            style={{ cursor: 'pointer' }}
            onClick={this.addLike.bind(this)}
            height={20} src={ liked ? LikeFull : LikeBlank} /> &nbsp; <span style={{ fontSize: 15, ...colorText }}>{ likes }</span>
          </Row>
        </Col>
      </Row>
    )
  }

}

const styles = {
  colorText: {
    color: '#757575'
  }
}

export default Tweet