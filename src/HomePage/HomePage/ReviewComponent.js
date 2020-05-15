import React from "react";
import {
	faQuoteLeft,
	faQuoteRight,
	faStar as FullStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as EmptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { v4: uuidv4 } = require("uuid");

export default function ReviewComponent({ review }) {
	const getStar = () => {
		const fullStar = review.star;
		const emptyStar = 5 - fullStar;

		let str = [];
		for (let i = 0; i < fullStar; i++) {
			str.push(<FontAwesomeIcon icon={FullStar} key={uuidv4()}/>);
		}
		for (let i = 0; i < emptyStar; i++) {
			str.push(<FontAwesomeIcon icon={EmptyStar} key={uuidv4()} />);
		}

		return str;
	};

	return (
		<div className="review_detail_container">
			<div className="review_pizza_photo"></div>
			<div className="review_ordered_pizza">{review.ordered}</div>
			<div className="review_star">{getStar()}</div>
			<div className="review_box">
				<FontAwesomeIcon icon={faQuoteLeft} className="faQuoteLeft" />
				<div className="review">{review.context}</div>
				<FontAwesomeIcon icon={faQuoteRight} className="faQuoteRight" />
			</div>

			<div className="review_reviwerDetail">
				<div className="review_reviewerName">{review.name}</div>
				<div className="review_url">{review.url}</div>
			</div>
		</div>
	);
}
