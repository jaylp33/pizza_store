import React from "react";

import BuildPizzaComp from "./Component/BuildPizzaComp";

export default function BuildPizza() {
	const selectionDetail = [
		{
			num: "1.",
			header: "Choose Your Crust",
		},
		{
			num: "2.",
			header: "Select Your Sauce",
		},
		{
			num: "3.",
			header: "Add Cheese",
		},
		{
			num: "4.",
			header: "Choose Your Toppings",
		},
	];

	return (
		<div className="buildPizza">
			<h2>Build Your Own Pizza</h2>

			<h4>
				Ut wisi enim ad minim veniam, quis nostrud exerci tation
				ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
				consequat. Duis autem vel eum iriure dolor in hendrerit in
				vulputate velit esse molestie consequat, vel illum dolore eu
				feugiat nulla facilisis at vero eros et accumsan et iusto.
			</h4>

			<div>
				{/* <div className="choose_crust">
					<h2>1.</h2>
					<h3>Choose Your Crust</h3>
					<div className="circle">
						<img src={circle} alt="" />
						<FontAwesomeIcon icon={faPlus} />
					</div>
				</div>
				<div className="choose_sauce">
					<h2>2.</h2>
					<h3>Select Your Sauce</h3>
					<div className="circle">
						<img src={circle} alt="" />
						<FontAwesomeIcon icon={faPlus} />
					</div>
				</div>
				<div className="choose_cheese">
					<h2>3.</h2>
					<h3>Add Cheese</h3>
					<div className="circle">
						<img src={circle} alt="" />
						<FontAwesomeIcon icon={faPlus} />
					</div>
				</div>
				<div className="choose_topping">
					<h2>4.</h2>
					<h3>Choose Your Toppings</h3>
					<div className="circle">
						<img src={circle} alt="" />
						<FontAwesomeIcon icon={faPlus} />
					</div>
				</div> */}

				{selectionDetail.map((selection) => {
					return (
						<BuildPizzaComp
							selection={selection}
							key={selection.header}
						/>
					);
				})}
				<div className="createOwnPizza">Create your own pizza</div>
			</div>
		</div>
	);
}
