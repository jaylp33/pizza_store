import React from "react";
import Header from "./Header";
import HomePage from "./HomePage/HomePage";
import { CSSTransition } from "react-transition-group";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Margherita() {
	const route = [
		{
			path: "/Margherita",
			name: "HomePage",
			Component: HomePage,
		},
	];

	return (
		<Router>
			<div className="Margherita">
				<Header />

				{route.map(({ path, Component }) => (
					<Route key={path} exact path={path}>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={500}
								classNames="page"
								unmountOnExit
							>
								<div className="page">
									<Component />
								</div>
							</CSSTransition>
						)}
					</Route>
				))}
			</div>
		</Router>
	);
}
