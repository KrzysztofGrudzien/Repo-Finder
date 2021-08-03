import User from '../users/User';
import Spinner from '../layout/Spinner';

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

export default Users;
