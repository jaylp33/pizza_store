import React, { useState, useRef, useEffect } from "react";
import ReviewComponent from "./ReviewComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TimelineMax, TweenMax } from "gsap";

export default function Review() {
	const [review, setReview] = useState([
		{
			index: 1,
			ordered: "Florentine Ricotta",
			star: 4,
			context:
				"We are serving pizza, your pizza is the fave of our family. Pick us as the pizza winner!",
			name: "Daniela Black",
			url: "www.pizzatempo.com",
		},
		{
			index: 2,

			ordered: "Garlic Prawn",
			star: 5,
			context: `Very Good! Very generous with the cheese! Don't know how it could get any better.`,
			name: "Eliz Bellarosa",
			url: "www.pizzatempo.com",
		},
		{
			index: 3,

			ordered: "Kimchi BBQ Chicken",
			star: 3,
			context: `I enjoy a classic pizza with quality ingredients. Quick delivery and always friendly service.`,
			name: "Bradley Taylor",
			url: "www.pizzatempo.com",
		},
	]);

	const reviewContainer = useRef();

	useEffect(() => {}, []);

	const nextReview = (e) => {
		const middleContent = reviewContainer.current.children[1];
		const width = middleContent.offsetWidth;

		const tl = new TimelineMax();
		tl.to(middleContent, {x: width})

		console.log(middleContent.style);
		console.log("fire");
	};

	const prevReview = () => {};

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

			<div className="review_detail" ref={reviewContainer}>
				{review.map((review) => (
					<ReviewComponent review={review} key={review.name} />
				))}
			</div>

			<div className="review_changer">
				<div className="review_changer_prev" onClick={prevReview}>
					<FontAwesomeIcon icon={faArrowLeft} />
				</div>
				<div className="review_changer_next" onClick={nextReview}>
					<FontAwesomeIcon icon={faArrowRight} />
				</div>
			</div>
		</div>
	);
}
