import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import User from './components/users/User';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <NavBar />
                <User />
            </div>
        );
    }
}

export default App;
