import React, {Component} from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            searched: false,
            results: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Change input value as user types into search bar
     */
    handleChange(event) {
        this.setState({input: event.target.value})
    }

    /**
     * @returns dummy results
     */
    displayResults() {
        return (
            <div>Hi</div>
        )
    }

    render() {
        return (
            <div>
                Search: <input type="text" onChange={this.handleChange}/>
                <button onClick={() => this.setState({searched: true})}>press</button>

                <div>
                    {this.state.searched && this.displayResults()}
                </div>
            </div>
        )
    }
}

export default Search
