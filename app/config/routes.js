import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';
import ResultsContainer from '../containers/ResultsContainer';

export default (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute		component={Home} />
			<Route path="p1"	header="Player One" component={PromptContainer} />
			<Route path="p2/:p1"	header="Player Two" component={PromptContainer} />
			<Route path="battle"	component={ConfirmBattleContainer} />
			<Route path="results"	component={ResultsContainer} />
		</Route>
	</Router>
);