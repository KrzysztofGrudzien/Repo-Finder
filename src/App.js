import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import SearchUser from './components/layout/SearchUser';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends Component {
    state = {
        users: [],
        isLoading: false,
    };

    handleSearchUser = async endPoint => {
        const baseUrl = `https://api.github.com/search/users?q=${endPoint}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        this.setState({ isLoading: true });
        const response = await axios.get(baseUrl).then(response => response.data.items);
        this.setState({ users: response, isLoading: false });
    };

    handleClearUsers = () => {
        this.setState({ users: [] });
    };

    render() {
        const { users, isLoading } = this.state;
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
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
