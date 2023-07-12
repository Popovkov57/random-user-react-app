import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import NavBar from './components/NavBar';
import { Component } from 'react';
import UserEdit from './components/UserEdit';
import UserCreation from './components/UserCreation';

class App extends Component {

  render() {
    return (
      <>
        <NavBar />
        <div className="App p-10 bg-slate-100">
          <Routes>
              <Route path="/" element={<Navigate to="/users" />}></Route>
              <Route path='/users' element={<UserList />}></Route>
              <Route path='/users/details/:userId' element={<UserDetails />}></Route>
              <Route path='/users/edit/:userId' element={<UserEdit />}></Route>
              <Route path='/users/new' element={<UserCreation />}></Route>
          </Routes>
        </div>
      </>
    )
  }
}

export default App;
