import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <NavBar />
                <Users />
            </div>
        );
    }
}

export default App;
