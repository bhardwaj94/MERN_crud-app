import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './redux/index';
import './index.css';
import Routes from './routes';
//import Check from './check';

ReactDOM.render(<Provider store={store}>
<BrowserRouter>
        <Routes />
    </BrowserRouter>
</Provider>, document.getElementById('root'));
//ReactDOM.render(<Check />,document.getElementById('root'));