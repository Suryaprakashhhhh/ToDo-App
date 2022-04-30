import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import './bootstrap.css'
//import AuthenticationService from './AuthenticationService'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import TodoComponent from '../../src/api/todo/TodoComponent'

class TodoApp extends Component {
  render() {
    return (
      <div className='TodoApp'>
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path='/' exact component={LoginComponent} />
              <Route path='/login' component={LoginComponent} />
              <AuthenticatedRoute path='/welcome/:name' component={WelcomeComponent} />
              <AuthenticatedRoute path='/todos/:id' component={TodoComponent} />
              <AuthenticatedRoute path='/todos' component={ListTodosComponent} />
              <AuthenticatedRoute path='/logout' component={LogoutComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
        {/*<LoginComponent />*/}
        {/*<Welcomecomponent />*/}
      </div>
    )
  }
}

// function ShowInvaliCredentials(props) {
//   if (props.hasLoginFailed) {
//     return <div>Invalid Credentials</div>
//   }
//   return null
// }

// function ShowLoginSuccessMessage(props) {
//   if (props.showSuccessMessage) {
//     return <div>Login Success</div>
//   }
//   return null
// }

export default TodoApp
