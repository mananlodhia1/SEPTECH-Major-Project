import React, { Component } from 'react';
import ProfileService from '../../api/sept/ProfileService.js';
import AppMenu from './AppMenu.jsx'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            searched: false,
            results: []
        };
    }

    /**
     * Change input value as user types into search bar
     */
    handleChange = event => {
        this.setState({ input: event.target.value })
    }

    /**
     * Sends input to back end search function and stores the resulting list 
     * in results prop
     */
    getResults = () => {
        this.setState({ searched: true });
        ProfileService.retrieveSearch(this.state.input)
            .then(response => {
                this.setState({ results: response.data })
            })
    }

    /**
     * Displays the list of profiles in results prop, generally retrieved by 
     * the search (getResults())
     */
    displayResults = () => {
        if (this.state.results.length == 0) {
            return <div>No results</div>
        }
        return (
            this.state.results.map((result) =>
                // Prints the following for each result

                <div class="container_search_profile">
                    <img className="avatar_mini" src={require('../Images/img_avatar.png')} />
                    <hr />
                    <div className="container_left"><img className="icon" src={require('../Images/name.png')} /> {result.name}</div>
                    <div className="container_left"><img className="icon" src={require('../Images/course.png')} /> {result.course}</div>
                    <br />
                </div>
            )
        )
    }

    render() {
        return (
            <div>
                <div className="container center">
                    <AppMenu link="Search" history={this.props.history} />
                </div>
                <br />
                <br />
                <br />
                
                <input type="text" class="search-input" placeholder="Name/ID" onChange={this.handleChange} />
                <button className="btn_search" onClick={this.getResults}>Search</button>

                <div className="results">
                    {this.state.searched && this.displayResults()}
                </div>
            </div>
        )
    }
}

export default Search
