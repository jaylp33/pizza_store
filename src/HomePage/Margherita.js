import React, { useRef, useState } from "react";
import Header from "./Header";
import StoreInfo from "./StoreInfo";
import PizzaSelection from "./PizzaSelection";
import BuildPizza from './BuildPizza';

export default function Margherita() {
	return (
		<div className="Margherita">
			<Header />

			<StoreInfo />
			<PizzaSelection />
			<BuildPizza />
		</div>
	);
}
