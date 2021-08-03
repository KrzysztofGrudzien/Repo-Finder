import PropTypes from 'prop-types';

const NavBar = ({ title }) => {
    return (
        <nav>
            <h1>{title}</h1>
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
