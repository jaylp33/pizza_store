import React from "react";
import square from "../asset/pic/square.png";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pizza from "../asset/pic/HomePage/pizza.png";

export default function PizzaSelection() {
	return (
		<div className="pizzaSelection">
			<div className="selection_prev">
				<img src={square} alt="" />
				<FontAwesomeIcon icon={faArrowLeft} />
			</div>
			<div className="selection_info">
				<div className="info_title">Peri-Peri</div>
				<div className="info_price">$18 - $37</div>
				<div className="info_des">
					Marinated Chicken Breast Fillets, Shallots, Roasted
					Capsicum, Caramelised Onions & Bocconcini on a Tomato base,
					topped with Peri-Peri sauce
				</div>
				<div className="info_order">
					<button>Order Now</button>
				</div>
			</div>
			<div className="selection_pic">
				<img src={Pizza} alt="" />
			</div>
			<div className="selection_next">
				<img src={square} alt="" />
				<FontAwesomeIcon icon={faArrowRight} />
			</div>
		</div>
	);
}
