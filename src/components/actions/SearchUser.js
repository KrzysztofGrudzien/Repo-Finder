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

    handleClearSearch = e => {
        const { clearUsers } = this.props;
        clearUsers();
    };

    render() {
        const { text } = this.state;
        const usersAmount = this.props.usersAmount.length;
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
                {usersAmount > 0 && <button onClick={this.handleClearSearch}>Clear</button>}
            </div>
        );
    }
}

SearchUser.propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
};

export default SearchUser;
