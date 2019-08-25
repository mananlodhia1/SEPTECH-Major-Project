import React, {Component} from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            searched: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({input: event.target.value})
    }

    displayResults() {
        return (
            <div>
                <div>User1</div><br/>
                <div>User2</div><br/>
                <div>User3</div><br/>
            </div>
        )
    }

    render() {
        return (
            <div>
                Search: <input type="text" onChange={this.handleChange}/>
                <button onClick={() => this.setState({searched: true})}>press</button>
                {this.state.searched && this.displayResults()}
            </div>
        )
    }
}

export default Search
