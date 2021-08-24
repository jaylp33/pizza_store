import React from "react";
import "./App.css";
import IndexPage from "./HomePage/IndexPage";
import Margherita from "./HomePage/Margherita";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
// import { useSpring, animated } from "react-spring";

function App() {
	// const props = useSpring({
	// 	opacity: 1,
	// 	from: { opacity: 0 },
	// });

	// testing

	const route = [
		{
			path: "/",
			name: "Index",
			Component: IndexPage,
		},
		{
			path: "/Margherita",
			name: "Margherita",
			Component: Margherita,
		},
	];

	return (
		<Router>
			<>
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
			</>
		</Router>
	);
}

export default App;
