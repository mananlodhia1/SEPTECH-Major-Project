import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PostService from '../../api/todo/PostService.js'
import AuthenticationService from '../todo/AuthenticationService.js'
import ListPost from './ListPosts.jsx';

class UserWall extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        if (this.state.id === -1) {
            return
        }

        let username = AuthenticationService.getLoggedInUserName()

        PostService.retrievePost(username, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a post!'
        } else if (values.description.length < 5) {
            errors.description = 'Post must contain at least 6 characters!'
        }

        return errors

    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName()

        let post = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            PostService.createPost(username, post)
                .then(() => this.props.history.push('/posts'))
        } else {
            PostService.updatePost(username, this.state.id, post)
                .then(() => this.props.history.push('/posts'))
        }

        console.log(values);
    }

    render() {

        let targetDate = new Date();
        let {description} = this.state
        //let targetDate = this.state.targetDate

        return (
            <div>
                <h1>New post</h1>
                <div className="container">
                    <Formik
                        initialValues={{ description, targetDate }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>What's on your mind?</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    {/* <fieldset className="form-group">
                                        <label>Date</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset> */}
                                    <button className="btn btn-success" type="submit">Post Now!</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default UserWall