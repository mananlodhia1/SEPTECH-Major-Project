import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import UserWall from '../Wall/UserWall.jsx'
import ListPosts from '../Wall/ListPosts.jsx'
import Profile from './Profile.jsx'
import Search from './Search.jsx'
import Nav from './Nav.jsx'
import Index from './Index.jsx'
import Registration from './Registration.jsx'
import EditProfile from './EditProfile.jsx'
import Chat from '../chat/Chat.jsx'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/registration" component={Registration}/>
                            <AuthenticatedRoute path="/index" component={Index}/>
                            <AuthenticatedRoute path="/home" component={Nav}/>
                            <AuthenticatedRoute path="/posts/:id" component={UserWall}/>
                            <AuthenticatedRoute path="/posts" component={ListPosts}/>
                            <AuthenticatedRoute path="/profile" component={Profile}/>
                            <AuthenticatedRoute path="/search" component={Search}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <AuthenticatedRoute path="/editProfile" component={EditProfile}/>
                            <AuthenticatedRoute path="/chat" component={Chat}/>
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