import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import './App.css';
import axios from 'axios';

class App extends Component {
    state = {
        users: [],
        isLoading: false,
    };

    async componentDidMount() {
        const baseUrl = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        this.setState({ isLoading: true });
        const response = await axios.get(baseUrl).then(response => response.data);
        this.setState({ users: response, isLoading: false });
    }

    render() {
        const { users, isLoading } = this.state;
        return (
            <div className='app'>
                <NavBar />
                <Users users={users} isLoading={isLoading} />
            </div>
        );
    }
}

export default App;
