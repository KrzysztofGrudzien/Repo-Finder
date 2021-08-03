import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchUser extends Component {
    state = {
        text: '',
    };

    handleSendRequest = e => {
        const { text } = this.state;
        const { searchUser } = this.props;
        e.preventDefault();
        searchUser(text);
        this.setState({ text: '' });
    };

    handleSearchUser = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { text } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSendRequest}>
                    <input
                        type='text'
                        name='text'
                        value={text}
                        placeholder='Search user...'
                        onChange={this.handleSearchUser}
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
        );
    }
}

SearchUser.propTypes = {
    searchUser: PropTypes.func.isRequired,
};

export default SearchUser;
