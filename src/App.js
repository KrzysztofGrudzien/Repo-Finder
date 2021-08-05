import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import UserProfile from './components/users/UserProfile';
import SearchUser from './components/layout/SearchUser';
import './App.scss';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends Component {
    state = {
        users: [],
        user: {},
        repos: [],
        isLoading: false,
    };

    handleSearchUser = async endPoint => {
        const baseUrl = `https://api.github.com/search/users?q=${endPoint}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        this.setState({ isLoading: true });
        const response = await axios.get(baseUrl).then(response => response.data.items);
        this.setState({ users: response, isLoading: false });
    };

    handleGetUserProfile = async endPoint => {
        const baseUrl = `https://api.github.com/users/${endPoint}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        this.setState({ isLoading: true });
        const response = await axios.get(baseUrl).then(response => response.data);
        this.setState({ user: response, isLoading: false });
    };

    handleGetUserRepos = async endPoint => {
        const baseUrl = `https://api.github.com/users/${endPoint}/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        this.setState({ isLoading: true });
        const response = await axios.get(baseUrl).then(response => response.data);
        this.setState({ repos: response, isLoading: false });
    };

    handleClearUsers = () => {
        this.setState({ users: [] });
    };

    render() {
        const { users, user, repos, isLoading } = this.state;
        return (
            <Router>
                <div className='app'>
                    <NavBar />
                    <Switch>
                        <Route path='/' exact>
                            <SearchUser
                                searchUser={this.handleSearchUser}
                                clearUsers={this.handleClearUsers}
                                usersAmount={users}
                            />
                            <Users users={users} isLoading={isLoading} />
                        </Route>
                        <Route path='/about' exact>
                            <About />
                        </Route>
                        <Route path='/contact' exact>
                            <Contact />
                        </Route>
                        <Route
                            path='/user/:login'
                            exact
                            render={props => (
                                <UserProfile
                                    {...props}
                                    getUserProfile={this.handleGetUserProfile}
                                    getUserRepos={this.handleGetUserRepos}
                                    repos={repos}
                                    user={user}
                                    isloading={isLoading}
                                />
                            )}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
