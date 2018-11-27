import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  componentWillMount(){
    axios.get('/api')
    .then(res=>{console.log(res)})
  }
  render() {
    return (      
      <div className="container">
        <h1>Simple CRUD App</h1><hr/>
          <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/signUp">Sign Up</a></li>
                        <li><a href="/dashboard/1">Dashboard</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="/logIn">Log In</a></li>
                        <li><a href="/logout">Log Out</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container row">
          <div className="jumbotron col-md-offset-3 col-md-4 pull-center">
            <form>
                        <label>Username:</label><br/>
                        <input type="text" name="username" /><br/>
                        <label>Password:</label><br/>
                        <input type="password" name="password"/><br/>
                        <input class="btn btn-primary" style={{padding:"10px",margin:"5px"}} type="submit" value="Log In"/>
            </form>                 
          </div>
        </div>   
      </div>
    );
  }
}

export default App;
