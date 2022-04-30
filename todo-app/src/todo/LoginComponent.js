import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService'

class LoginComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false
    }

    //this.handleUsernameChange = this.handleUsernameChange.bind(this)
    //this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
  }

  handleChange(event) {
    //console.log(this.state)
    this.setState({
      [event.target.value]: event.target.value
    })
  }

  loginClicked() {
    // if (this.state.username === 'surya' && this.state.password === 'dummy') {
    //   AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
    //   this.props.history.push(`/welcome/${this.state.username}`)
    //   //this.setState({ showSuccessMessage: true })
    //   // this.setState({ hasLoginFailed: false })
    // } else {
    //   console.log('Failed')
    //   this.setState({ showSuccessMessage: false })
    //   this.setState({ hasLoginFailed: true })
    // }

    // AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
    //   .then(() => {
    //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
    //     this.props.history.push(`/welcome/${this.state.username}`)
    //   })
    //   .catch(() => {
    //     this.setState({ showSuccessMessage: false })
    //     this.setState({ hasLoginFailed: true })
    //   })

    AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
      .then(response => {
        AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
        this.props.history.push(`/welcome/${this.state.username}`)
      })
      .catch(() => {
        this.setState({ showSuccessMessage: false })
        this.setState({ hasLoginFailed: true })
      })
  }

  //handleUsernameChange(event) {
  //console.log(event.target.value)
  // this.setState({
  //  [event.target.value]: event.target.value
  //})
  //}

  //handlePasswordChange(event) {
  // console.log(event.target.value)
  //this.setState({ password: event.target.value })
  //}

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className='container'>
          {/*<ShowInvaliCredentials hasLoginFailed={this.state.hasLoginFailed} />*/}
          {this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid Credentials</div>}
          {this.state.showSuccessMessage && <div>Login Success</div>}
          {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />*/}
          User Name :
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={this.state.username}
            onChange={e => {
              this.setState({
                username: e.target.value
              })
            }}
          />
          Password :
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={e => {
              this.setState({
                password: e.target.value
              })
            }}
          />
          <button className='btn btn-success' onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default LoginComponent
