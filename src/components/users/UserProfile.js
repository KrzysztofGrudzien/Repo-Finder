import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const UserProfile = ({ getUserProfile, getUserRepos, isLoading, repos, user, match }) => {
    useEffect(() => {
        getUserProfile(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

    const { login, avatar_url, location } = user;

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
            <ul>
                {repos.map(({ name, forks, watchers }) => (
                    <li>
                        project name: {name} forks:{forks} stars: {watchers}
                    </li>
                ))}
            </ul>
        </div>
    );
};

UserProfile.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUserProfile: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
};

export default UserProfile;
