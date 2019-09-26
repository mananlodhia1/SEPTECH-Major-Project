import React, { Component } from 'react'
import PostService from '../../api/todo/PostService.js'
import AuthenticationService from '../todo/AuthenticationService'
import moment from 'moment'
import './WallStyles.css'
import UserWall from './UserWall.jsx';

class ListPost extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            posts: [],
            message: null
        }
        this.deletePostClicked = this.deletePostClicked.bind(this)
        this.updatePostClicked = this.updatePostClicked.bind(this)
        this.addPostClicked = this.addPostClicked.bind(this)
        this.refreshPosts = this.refreshPosts.bind(this)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshPosts();
        console.log(this.state)
    }

    refreshPosts() {
        let username = AuthenticationService.getLoggedInUserName()
        PostService.retrieveAllPosts(username)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ posts: response.data })
                }
            )
    }

    deletePostClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        //console.log(id + " " + username);
        PostService.deletePost(username, id)
            .then(
                response => {
                    this.setState({ message: `Delete of post ${id} Successful` })
                    this.refreshPosts()
                }
            )

    }

    addPostClicked() {
        this.props.history.push(`/posts/-1`)
    }

    updatePostClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/posts/${id}`)
        // /todos/${id}
        // let username = AuthenticationService.getLoggedInUserName()
        // //console.log(id + " " + username);
        // TodoDataService.deleteTodo(username, id)
        //  .then (
        //      response => {
        //         this.setState({message : `Delete of todo ${id} Successful`})
        //         this.refreshTodos()
        //      }
        //  )

    }

    createNewPost(){
        let username = AuthenticationService.getLoggedInUserName()

        let post = {
            id: -1,
            description: document.getElementById('descri').value,
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        PostService.createPost(username, post)
                .then(() => this.refreshPosts())
    }

    render() {
        console.log('render')
        return (
            // <div>
            //     <h1>User Posts</h1>
            //     {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
            //     <div className="container">
            //         <table className="table">
            //             <thead>
            //                 <tr>
            //                     <th>Post</th>
            //                     <th>Post Date</th>
            //                     <th>Modify</th>
            //                     <th>Delete</th>
            //                 </tr>
            //             </thead>
            //             <tbody>
            //                 {
            //                     this.state.posts.map(
            //                         post =>
            //                             <tr key={post.id}>
            //                                 <td>{post.description}</td>
            //                                 <td>{moment(post.targetDate).format('YYYY-MM-DD')}</td>
            //                                 <td><button className="btn btn-success" onClick={() => this.updatePostClicked(post.id)}>Update</button></td>
            //                                 <td><button className="btn btn-warning" onClick={() => this.deletePostClicked(post.id)}>Delete</button></td>
            //                             </tr>
            //                     )
            //                 }
            //             </tbody>
            //         </table>
            //         <div className="row">
            //             <button className="btn btn-success" onClick={this.addPostClicked}>New Post</button>
            //         </div>
            //     </div>
            // </div>
            <div>
                {/* <div className="row">
                         <button className="btn-new-post" onClick={this.addPostClicked}>New Post</button>
                </div> */}
                <div>
                    <input type="text" name="description" id="descri"/>
                    <button onClick={() => this.createNewPost()}>Post now</button>
                </div>
                {
                    this.state.posts.map(
                        post =>
                            <div className="post-container" key={post.id}>
                                <p>{post.description}</p>
                                <div className="date">{moment(post.targetDate).format('YYYY-MM-DD')}</div>
                                <button className="btn-update" onClick={() => this.updatePostClicked(post.id)}>Update</button>
                                <button className="btn-delete" onClick={() => this.deletePostClicked(post.id)}>Delete</button>
                            </div>
                    )
                }
                
            </div>
            
        )
    }
}

export default ListPost