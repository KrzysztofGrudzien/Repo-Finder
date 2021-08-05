import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchUser = ({ searchUser, clearUsers, usersAmount }) => {
    const [text, setText] = useState('');
    const [textAlert, setTextAlert] = useState(null);

    const handleSendRequest = e => {
        e.preventDefault();

        if (text === '') {
            setTextAlert('Please enter a text');
        } else {
            searchUser(text);
            setText('');
        }
        setTimeout(() => setTextAlert(null), 3000);
    };

    const handleSearchUser = e => {
        setText(e.target.value);
    };

    const handleClearSearch = e => {
        clearUsers();
    };

    const usersAmounts = usersAmount.length;

    return (
        <div>
            {textAlert && <div>{textAlert}</div>}
            <form onSubmit={handleSendRequest}>
                <input type='text' name='text' value={text} placeholder='Search user...' onChange={handleSearchUser} />
                <button type='submit'>Search</button>
            </form>
            {usersAmounts > 0 && <button onClick={handleClearSearch}>Clear</button>}
        </div>
    );
};

SearchUser.propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
};

export default SearchUser;
