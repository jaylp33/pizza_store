import React, { useState, useRef } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import circle from "../asset/pic/Circle.png";

export default function BuildPizzaComp({ selection }) {
	const [expand, setExpand] = useState(false);
	const expandBox = useRef();

	const expandDetail = (e) => {
		setExpand(!expand);
		expandBox.current.classList.toggle("active");
		// console.log(expandBox.current.classList);
	};
	return (
		<>
			<div className="pizzaBuilder" ref={expandBox}>
				<div>
					<h2>{selection.num}</h2>
					<h3>{selection.header}</h3>
					<div className="circle" onClick={expandDetail}>
						<img src={circle} alt="" />
						<FontAwesomeIcon icon={expand ? faMinus : faPlus} />
					</div>
				</div>
				<div className="selectionDetail">{get_context()}</div>
			</div>

		</>
	);

	function get_context() {
		if (selection.num == "1.") {
			return (
				<div className="expandDetail">
					<h1>add crust</h1>
				</div>
			);
		} else if (selection.num == "2.") {
			return (
				<div className="expandDetail">
					<h1>add sauce</h1>
				</div>
			);
		} else if (selection.num == "3.") {
			return (
				<div className="expandDetail">
					<div className="boxPhoto">
                        <img src="" alt=""/>
                    </div>
					<div className="cheeseDetail">
						<div className="cheese_info">
							What’s a pizza without brilliant cheese? Pick one or
							blend ‘em for that bohemian artisan feel. Choose
							from five different types of cheeses, each are
							perfect for any style of pizza or personal taste.
						</div>
						<div className="cheese_list">
                            <ul>
                                <li>Mozzarella</li>
                                <li>Goat cheese</li>
                                <li>Canadian cheddar</li>
                                <li>Formaggio blend (asiago, romano + parmesan)</li>
                                <li>Feta cheese</li>
                                <li>Cheddar cheese</li>
                                <li>Parmigiano cheese</li>
                            </ul>
                        </div>
					</div>

				</div>
			);
		} else {
			return (
				<div className="expandDetail">
					<h1>add topping</h1>
				</div>
			);
		}
	}
}
