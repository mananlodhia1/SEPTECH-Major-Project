import React, {Component} from 'react';
import ProfileService from '../../api/sept/ProfileService.js';

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
        this.setState({input: event.target.value})
    }

    /**
     * Sends input to back end search function and stores the resulting list 
     * in results prop
     */
    getResults = () => {
        ProfileService.retrieveSearch(this.state.input)
            .then(response => {
                this.setState({results: response.data})
            })
    }

    /**
     * Displays the list of profiles in results prop, generally retrieved by 
     * the search (getResults())
     */
    displayResults = () => {
        return (
            this.state.results.map((result) =>
                <div className="singleResult">
                    {/* Prints the following for each result */}
                    <span className="resultName">{result.name}</span><br/>
                    <span className="resultSubtext">{result.sid}</span>
                    <span className="resultSubtext">{result.course}</span>
                    <span className="resultSubtext">{result.bio}</span>
                </div>
            )
        )
    }

    render() {
        return (
            <div>
                Search: <input type="text" onChange={this.handleChange}/>
                <button onClick={this.getResults}>press</button>
                
                <div className="results">
                    {this.displayResults()}
                </div>
            </div>
        )
    }
}

export default Search
