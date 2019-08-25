import React, {Component} from 'react';
import './wallStyles.css';

class UserWall extends Component {

    render() {
        return (
            <div>
                <h1>User Wall</h1>
                <div className="boxed">
                    <b>User 1: </b>
                    This is an example of a user post.
                </div><br></br>
                <div className="boxed">
                    <b>User 2: </b>
                    This is an example of another user post.
                </div><br></br>
                New post: <input type="text" name="newpost"></input>
                <button className="btn btn-success">Post!</button>
            </div>
        )
    }

}

export default UserWall
