import React, { useState } from "react";
import Pizza_Des from "./Pizza_Des";

export default function PizzaDescription() {
	const [des, setDes] = useState([
		{
			title: "crusts",
			num: 5,
		},
		{
			title: "sauces",
			num: 17,
		},
		{
			title: "cheeses",
			num: 8,
		},
		{
			title: "Veggies",
			num: 20,
		},
		{
			title: "Meats",
			num: 1,
		},
		{
			title: "Toppings",
			num: 36,
		},
	]);

	return (
		<div className="PizzaDes">
            
            {des.map(des => {
                return <Pizza_Des key={des.title} des={des} />
            })}
		</div>
	);
}
