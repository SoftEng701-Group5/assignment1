import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LoginView from './pages/loginView';
import PageNotFoundView from './pages/pageNotFoundView';

function App() {
	return (
		<Router>
			<div className="app">
				<h1>Global content</h1>
				<Switch>
					<Route exact path="/">
						<LoginView />
					</Route>
					<Route>
						<PageNotFoundView />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
