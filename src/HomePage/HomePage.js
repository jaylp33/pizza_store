import React from "react";
import "./HomePage.scss";
import { Link, IndexLink } from "react-router";

export default function HomePage() {
	return (
		<div className="HomePage">
			<h1>Get it while it’s hot!</h1>
			<h2>
				We create custom, personal pizzas with quality ingredients in
				only five minutes.
			</h2>
			<button><Link to="./Margherita.js">Order Online</Link></button>
		</div>
	);
}
