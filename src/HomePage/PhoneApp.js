import React from "react";
import Iphone6 from "./asset/pic/iPhone6 .png";
import { faAppleAlt as Apple } from "@fortawesome/free-solid-svg-icons";
import { faAndroid as Android } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PhoneApp() {
	return (
		<div className="phoneApp_Section">
			<div className="iphone6">
				<img src={Iphone6} alt="" />
			</div>

			<div className="phoneApp_detail_container">
				<h2>
					Get the newest version of our mobile app for your phone.
				</h2>

				<h4>
					Do you have an iPhone, Android device or an web-enabled
					mobile? Then it’s easier than ever to order hot and fresh
					pizza – no phone calls necessary! Mobile ordering lets you
					access all the best features in a format that’s tailored to
					the screen size of your mobile phone, find special online
					offers and order your favorite pizza and sides in a flash.
				</h4>

				<ul className="phoneApp_detail_listUl">
					Here's why it's great:
					<li>It's free</li>
					<li>No registration required</li>
					<li>Order from the full menu</li>
					<li>Find local deals</li>
					<li>Pay directly from the app</li>
				</ul>

				<div className="phoneApp_detail_btns">
					<div className="phoneApp_btn_ios">
						<FontAwesomeIcon icon={Apple} />
						Download iphone app
					</div>
					<div className="phoneApp_btn_android">
						<FontAwesomeIcon icon={Android} />
						download android app
					</div>
				</div>
			</div>
		</div>
	);
}
