import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import AuthPage from './routes/AuthPage';
import AdminPage from './routes/AdminPage';

class Root extends Component {
  render() {
    return (
      <div>
        <h1>HelloWorld</h1>
        <Route path="/admin" component={AdminPage} />
        <Route path="/auth" component={AuthPage} />
        <Link to="/admin">admin</Link> <br/>
        <Link to="/auth">auth</Link>
      </div>
    );
  }
}

export default Root;