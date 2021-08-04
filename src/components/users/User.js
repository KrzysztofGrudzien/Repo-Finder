import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user: { login, avatar_url, html_url } }) => {
    return (
        <li>
            <h2>{login}</h2>
            <img src={avatar_url} alt={login} style={{ borderRadius: '50%' }} />
            <Link to={`/user/${login}`}>go to the profile</Link>
        </li>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;
