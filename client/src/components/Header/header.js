import React from 'react';

const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/signUp">Sign Up</a></li>
                        <li><a href="/dashboard/1">Dashboard</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/logIn">Log In</a></li>
                        <li><a href="/logout">Log Out</a></li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;