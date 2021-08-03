import PropTypes from 'prop-types';

const User = ({ user: { login, avatar_url, html_url } }) => {
    return (
        <li>
            <h2>{login}</h2>
            <img src={avatar_url} alt={login} style={{ borderRadius: '50%' }} />
            <a href={html_url}>go to the profile</a>
        </li>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;
