import React, { Component } from 'react';

class User extends Component {
    state = {
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
    };

    render() {
        const { login, avatar_url, id, html_url } = this.state;
        return (
            <div>
                <h2>
                    I'm {login} - id - {id}
                </h2>
                <img src={avatar_url} alt={login} style={{ borderRadius: '50%' }} />
                <a href={html_url}>{login}</a>
            </div>
        );
    }
}

export default User;
