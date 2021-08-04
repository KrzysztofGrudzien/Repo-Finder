import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ title }) => {
    return (
        <nav>
            <h1>{title}</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

NavBar.defaultProps = {
    title: 'Repo finder',
};

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default NavBar;
