import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginView from './pages/loginView';
import PageNotFoundView from './pages/pageNotFoundView';

function App() {
	return (
		<Router>
			<div className="app">
				<h1>Global content</h1>
				<Switch>
					{/* Route to login page */}
					<Route exact path="/">
						<LoginView />
					</Route>

					{/* Fallback - if none of the above routes are hit */}
					<Route>
						<PageNotFoundView />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
