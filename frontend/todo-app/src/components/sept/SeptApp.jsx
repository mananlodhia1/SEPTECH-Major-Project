import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import UserWall from '../Wall/UserWall.jsx'
import ListPosts from '../Wall/ListPosts.jsx'
import Profile from './Profile.jsx'
import Nav from './Nav.jsx'
import Index from './Index.jsx'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/index" component={Index}/>
                            <AuthenticatedRoute path="/home" component={Nav}/>
                            <AuthenticatedRoute path="/posts/:id" component={UserWall}/>
                            <AuthenticatedRoute path="/posts" component={ListPosts}/>
                            <AuthenticatedRoute path="/profile" component={Profile}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            
                            <Route component={ErrorComponent}/>
                        </Switch>
                    </>
                </Router>
                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
        )
    }
}

export default TodoApp