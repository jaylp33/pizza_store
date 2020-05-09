import React, { useState } from "react";
import ReviewComponent from "./Component/ReviewComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Review() {
	const [review, setReview] = useState([
		{
			ordered: "Florentine Ricotta",
			star: 4,
			context:
				"We are serving pizza, your pizza is the fave of our family. Pick us as the pizza winner!",
			name: "Daniela Black",
			url: "www.pizzatempo.com",
		},
		{
			ordered: "Garlic Prawn",
			star: 5,
			context: `Very Good! Very generous with the cheese! Don't know how it could get any better.`,
			name: "Eliz Bellarosa",
			url: "www.pizzatempo.com",
		},
		{
			ordered: "Kimchi BBQ Chicken",
			star: 3,
			context: `I enjoy a classic pizza with quality ingredients. Quick delivery and always friendly service.`,
			name: "Bradley Taylor",
			url: "www.pizzatempo.com",
		},
	]);

	return (
		<div className="reviewComponent">
			<h2 className="review_title">
				Here's what some customers are saying...
			</h2>

			<h4>
				Customer service and product quality are our top priority.
				Although we strive to make every customer experience as easy as
				possible, it’s how our customers rate us that really matters.
				Because it makes our customers happy! And we love making people
				happy.
			</h4>

			<div className="review_detail">
				{review.map((review) => {
					return (
						<ReviewComponent review={review} key={review.name} />
					);
				})}
			</div>

			<div className="review_changer">
				<div className="review_changer_prev">
					<FontAwesomeIcon icon={faArrowLeft} />
				</div>
				<div className="review_changer_next">
					<FontAwesomeIcon icon={faArrowRight} />
				</div>
			</div>
		</div>
	);
}
