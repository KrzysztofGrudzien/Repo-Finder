import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

class UserProfile extends Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.login);
    }

    render() {
        const { login, avatar_url, location } = this.props.user;
        const { isLoading } = this.props;

        if (isLoading) return <Spinner />;

        return (
            <div>
                <ul>
                    <li>{login}</li>
                    <li>
                        <img src={avatar_url} alt={login} />
                    </li>
                    <li>{location}</li>
                </ul>
            </div>
        );
    }
}

UserProfile.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUserProfile: PropTypes.func.isRequired,
};

export default UserProfile;
