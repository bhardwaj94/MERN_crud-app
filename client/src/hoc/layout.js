import React from 'react';
import Header from '../components/Header/header';
const Layout = (props) => {
    return(
        <div className="container">
            <h1>Simple CRUD App</h1><hr/>
            <Header />
            {props.children}
        </div>
    );
};

export default Layout;