import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import './index.css';
import reducers from './reducers';
import Routes from './routes';

const store = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore);

ReactDOM.render(
<Provider store={store(reducers)}>
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
</Provider>, document.getElementById('root'));
