import React from "react";

export default function News({ news }) {
	return (
		<div className="latestNews_detail_container">
			<div className="latestNews_detail_pic_border">
				<div className="latestNews_detail_pic"></div>
			</div>
			<div className="latestNews_detail_date">{news.date}</div>
			<div className="latestNews_detail_title">{news.title}</div>
			<div className="latestNews_detail_context">{news.context}</div>
			<div className="latestNews_detail_btn">Read More</div>
		</div>
	);
}
