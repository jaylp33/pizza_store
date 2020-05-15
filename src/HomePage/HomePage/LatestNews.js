import React, { useState } from "react";
import News from "./News";
import NewsData from "./mockData/newsData";

export default function LatestNews() {
	const [news, setNews] = useState(NewsData);

	return (
		<div className="latestNews_section">
			<h2>Latest News $ Recipes</h2>

			<div className="latestNews_detail">
				{news.map(news => {
                    return <News news={news} key={news.title} />
                })}
			</div>
		</div>
	);
}
