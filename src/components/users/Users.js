import User from '../users/User';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, isLoading }) => {
    if (!isLoading) {
        return (
            <ul>
                {users.map(user => (
                    <User key={user.id} user={user}></User>
                ))}
            </ul>
        );
    } else {
        return <Spinner />;
    }
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default Users;
