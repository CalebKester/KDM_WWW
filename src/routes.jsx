import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import requireAuth from './containers/Require_auth';
import Home from './containers/Home/Home.jsx';
import App from './App.jsx';
import Login from './containers/Login/Login.jsx';
import About from './containers/About/About.jsx';
import System from './containers/System/System.jsx';
import Survivor from './containers/Survivor/Survivor.jsx';
import Glossary from './containers/Glossary/Glossary.jsx';
import Survivors from './containers/Survivors/Survivors.jsx';
import Settlements from './containers/Settlement/Settlements.jsx';
import Settlement from './containers/Settlement/Settlement.jsx';
import Storage from './containers/Storage/Storage.jsx';
import Resources from './containers/Storage/Resources.jsx';
import Gear from './containers/Storage/Gear.jsx';
import Campaign from './containers/Campaign/Campaign.jsx';
import SurvivorHome from './containers/SurvivorHome/SurvivorHome.jsx';
import World from './containers/World/World.jsx';
import Aya from './components/Aya/Aya.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Splash from './components/Splash/Splash.jsx';
import { AUTH_USER } from './actions/types';

const ReactGA = require('react-ga');
ReactGA.initialize('UA-89982304-01');

require('../styles/main.scss');

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');

if (token) {
	store.dispatch({ type: AUTH_USER });
}

function logPageView() {
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview(window.location.pathname);
}

render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory} onUpdate={logPageView} >
			<Route path="/" component={Login} />
			<Route component={App}>
				{/*<IndexRoute component={Splash} />*/}
				<Route title="Home" path="/home" component={Home} />
				<Route title="Campaigns" path="/campaigns" component={Campaign} />
				<Route title="System" path="/system" component={System} />
				<Route title="World" path="/world" component={World} />
				<Route title="About" path="/about" component={About} />
				<Route title="Glossary" path="/glossary" component={Glossary} />
				<Route title="Survivors" path="/survivors" component={Survivors} />
				<Route title="Settlements" path="/settlements" component={Settlements} />
				<Route title="Current Settlement" path="/settlement/:oid" component={Settlement} />
				<Route title="Storage" path="/storage">
   				<IndexRoute component={Storage} />
    			<Route title="Resources" path="resources" component={Resources} />
    			<Route title="Gear" path="gear" component={Gear} />
				</Route>
				<Route title="Aya" path="/aya" component={Aya} />
				<Route title="Survivor" path="/survivor/" component={SurvivorHome} />
				<Route title="Splash" path="/splash" component={Splash} />
				<Route title="Not Found" path="*" component={NotFound} />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('app'));
