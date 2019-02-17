import React, { Component } from 'react'
import { Card, Form, Button, Image, Container, Row, Col } from 'react-bootstrap'

export default class Login extends Component {
  render () {
    return (
      <Card style={{ margin: 'auto', marginTop: '15%', width: '20rem', border: 'none' }}>
        <Card.Body>
          <Container>
            <Col>
            <Row className='justify-content-md-center'>
              <Image
              style={{ marginBottom: '1rem' }}
              height='50px'
              width='60px'
              rounded
              src='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png' />
            </Row>
            <Row className='justify-content-md-center'>
              <Form.Control type='text' placeholder='Nome de Usuário' />
            </Row>
            <Row className='justify-content-md-center'>
              <Button style={{ marginTop: '0.5rem' }} variant='primary' block>Entrar</Button>
            </Row>
            </Col>
          </Container>
        </Card.Body>
      </Card>
    )
  }
}