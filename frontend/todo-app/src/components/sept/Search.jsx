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
     * @returns dummy results
     */
    getResults = () => {
        ProfileService.retrieveSearch(this.state.input)
            .then(response => {
                this.setState({results: response.data})
            })
    }

    displayResults = () => {
        return (
            this.state.results.map((result) =>
                <div>{result.sid}</div>
            )
        )
    }

    render() {
        return (
            <div>
                Search: <input type="text" onChange={this.handleChange}/>
                <button onClick={this.getResults}>press</button>
                
                {this.displayResults()}
            </div>
        )
    }
}

export default Search
