import React from "react";
import "./asset/style/All.scss";
import { Link } from "react-router-dom";

export default function IndexPage() {
	return (
		<div className="HomePage">
            <h1>Get it while it’s hot!</h1>
			<h2>
				We create custom, personal pizzas with quality ingredients in
				only five minutes.
			</h2>
            <Link to="/Margherita">
			<button>Order Online</button>
            </Link>
		</div>
	);
}
