import './Searchbar.css';
import { Component } from 'react';

export default class Searchbar extends Component {

    state = {
        name: '',
    }


    handleSearchChange = e => {
        this.setState({ name: e.target.value.toLowerCase() })
    }

    handleSubmit = event => {
        event.preventDefault();

        if(this.state.name.trim() === ''){
            alert('Search images and photos');
            return
        }

        this.props.onSubmit(this.state.name);
        // this.setState({name: ''})
    }

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleSearchChange}
                    />
                </form>
            </header>
        )
    }
}

