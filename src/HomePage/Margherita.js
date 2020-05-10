import React from "react";
import Header from "./Header";
import StoreInfo from "./StoreInfo";
import PizzaSelection from "./PizzaSelection";
import BuildPizza from "./BuildPizza";
import PizzaDescription from "./PizzaDescription";
import Review from "./Review";
import PhoneApp from "./PhoneApp";
import LatestNews from "./LatestNews";

export default function Margherita() {
	return (
		<div className="Margherita">
			<Header />

			<StoreInfo />
			<PizzaSelection />
			<BuildPizza />
			<PizzaDescription />
			<Review />
			<PhoneApp />
			<LatestNews />
		</div>
	);
}
