import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'
import HelloWorldService from '../../src/api/todo/HelloWroldService'
class WelcomeComponent extends Component {
  constructor(props) {
    super(props)
    this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this)
    this.state = {
      welcomeMessage: ''
    }
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className='d-flex justify-content-center'>
          Welcome {this.props.match.params.name}.you can merge your todos <Link to='/todos'>here</Link>
        </div>

        <div className='d-flex justify-content-center'>
          Click here to get a customized welcome message
          <button onClick={this.retriveWelcomeMessage} className='btn btn-success'>
            Get Welcome Message
          </button>
        </div>
        <div className='d-flex justify-content-center'>{this.state.welcomeMessage}</div>
      </>
    )
  }
  retriveWelcomeMessage() {
    //HelloWorldService.executeHelloWorldService().then(response => this.handleSuccessfulResponse(response))
    //HelloWorldService.executeHelloWorldBeanService().then(response => this.handleSuccessfulResponse(response))
    HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
      .then(response => this.handleSuccessfulResponse(response))
      .catch(error => this.handleError(error))
  }

  handleSuccessfulResponse(response) {
    this.setState({ welcomeMessage: response.data.message })
  }

  handleError(error) {
    console.log(error.response)
    let errorMessage = ''
    if (error.message) {
      errorMessage += error.message
    }

    if (error.response && error.response.data) {
      errorMessage += error.response.data.message
    }

    this.setState({ welcomeMessage: errorMessage })
  }
}

export default WelcomeComponent
