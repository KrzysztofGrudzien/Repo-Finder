import React, { Component } from 'react';
import User from '../users/User';

class Users extends Component {
    render() {
        console.log(this.props.users);
        return (
            <ul>
                {this.props.users.map(user => (
                    <User key={user.id} user={user}></User>
                ))}
            </ul>
        );
    }
}

export default Users;
