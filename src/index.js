import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import BlockchainTestPage from './components/BlockchainTestPage';
import EmptyPage from './components/EmptyPage';
import InitError from './components/InitError';
import Home from './components/Home';
import MyAccount from './components/MyAccount';
import MyWager from './components/MyWager';
import Signup from './components/Signup';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import localforage from 'localforage';
import { Apis, ChainConfig } from 'graphenejs-ws';
import { Config } from './constants';


// On enter handler
const onEnter = (nextState, replace, callback) => {

  let connectionString = Config.blockchainUrls[0];

  // Reset connection if we are going to init-error page
  if (nextState.location.pathname === "/init-error") {
    return Apis.reset(connectionString, true).init_promise
    .then(() => {
      return callback();
    }).catch((error) => {
      console.error('Fail to reset connection to blockchain', error);
      return callback();
    });
  }

  // Localforage Indexeddb setting ( for redux-persist)
  localforage.config({
    driver      : localforage.INDEXEDDB, // Force WebSQL; same as using setDriver()
    name        : 'bookie',
    version     : 1.0,
    // storeName   : 'store_name', // Should be alphanumeric, with underscores.
    description : 'desc'
  });
  localforage.setDriver(localforage.INDEXEDDB);

  // Connecting to blockchain
  // Mark connecting to blockchain
  Apis.instance(connectionString, true).init_promise.then((res) => {
    console.log('Connected to:', res[0] ? res[0].network_name : 'Undefined Blockchain');
    // TODO: find better place to set this
    // This is set to TEST since Peerplays Blockchain is currently using TEST prefix
    ChainConfig.setPrefix("TEST");
    callback();
  }).catch((error) => {
    console.error('Fail to connect to blockchain', error);
    // Go to init error page
    replace('/init-error');
    callback();
  })


}

// Add new page here
const routes = (
  <Route path='/' component={ App } onEnter={ onEnter } >
      <IndexRoute component={ Home } />
      <Route path='/signup' component={ Signup } />
      <Route path='/blockchain-test-page' component={ BlockchainTestPage } />
      <Route path='/empty-page' component={ EmptyPage } />
      <Route path='/init-error' component={ InitError } />
      <Route path='/home' component={ Home } />
      <Route path='/my-account' component={ MyAccount } />
      <Route path='/my-wager' component={ MyWager } />
    </Route>
);

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history } routes={ routes } />
  </Provider>,
  document.getElementById('root')
);
