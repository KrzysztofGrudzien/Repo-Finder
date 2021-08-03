import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {
    static defaultProps = {
        title: 'Repo finder',
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        const { title } = this.props;
        return (
            <nav>
                <h1>{title}</h1>
            </nav>
        );
    }
}

export default NavBar;
