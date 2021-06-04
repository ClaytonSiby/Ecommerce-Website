import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// components
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { setCurrentUser } from './redux/Users/user.actions';
import { auth, handleUserProfile } from './Firebase/utils';

// Higher Order components
import WithAuth from './hoc/withAuth';

// layouts
import MainLayout from './Layouts/MainLayout';
import HomepageLayout from './Layouts/HomepageLayout';

// pages
import Homepage from './pages/Homepage';
import Dashboard from './pages/DashBoard';

import Registration from './pages/Registration';
import Recovery from './pages/Recovery';
import Login from './pages/Login';

// styles
import './default.scss';

const App = (props) => {
	const { setCurrentUser, currentUser } = props;
	useEffect(() => {
		// user signedin or out, send the information to the redux store.
		const authListener = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await handleUserProfile(userAuth);
				userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});

		return () => {
			authListener();
		};
	}, []);

	return (
		<Container className="App">
			<Switch>
				<Route
					exact
					path="/"
					render={() => (
						<HomepageLayout>
							<Homepage />
						</HomepageLayout>
					)}
				/>
				<Route
					path="/registration"
					render={() =>
						currentUser ? (
							<Redirect to="/" />
						) : (
							<MainLayout>
								<Registration />
							</MainLayout>
						)
					}
				/>
				<Route
					path="/login"
					render={() =>
						currentUser ? (
							<Redirect to="/" />
						) : (
							<MainLayout>
								<Login />
							</MainLayout>
						)
					}
				/>

				<Route
					path="/recovery"
					render={() => (
						<MainLayout>
							<Recovery />
						</MainLayout>
					)}
				/>
				<Route
					path="/dashboard"
					render={() => (
						<WithAuth>
							<MainLayout>
								<Dashboard />
							</MainLayout>
						</WithAuth>
					)}
				/>
			</Switch>
		</Container>
	);
};

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
