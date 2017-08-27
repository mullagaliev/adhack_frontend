import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>

        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail/Login'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Пароль'
              type='password'
            />

              <Button color='teal' fluid size='large'> <a href="/" className="whiteLink">Вход </a></Button>

          </Segment>
        </Form>
        <Message>
          Нет профиля? <a href='#'>Создать</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm