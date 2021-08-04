import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchUser extends Component {
    state = {
        text: '',
        alertMsg: null,
    };

    handleSendRequest = e => {
        e.preventDefault();
        const { text } = this.state;
        const { searchUser } = this.props;

        if (text === '') {
            this.setState({ alertMsg: 'Please enter a text' });
        } else {
            searchUser(text);
            this.setState({ text: '' });
        }

        setTimeout(() => this.setState({ alertMsg: null }), 3000);
    };

    handleSearchUser = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleClearSearch = e => {
        const { clearUsers } = this.props;
        clearUsers();
    };

    render() {
        const { text, alertMsg } = this.state;
        const usersAmount = this.props.usersAmount.length;
        return (
            <div>
                {alertMsg && <div>{alertMsg}</div>}
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
};

export default SearchUser;
