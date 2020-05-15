import React, { useState } from "react";
import { ReactComponent as Hamburger } from "./asset/pic/hamburger.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { faSearch as Search } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
	const StyledBadge = withStyles((theme) => ({
		badge: {
			right: 5,
			top: 5,
			border: `2px solid ${theme.palette.background.paper}`,
			padding: "0 4px",
		},
	}))(Badge);

	const [sideMenu, setSideMenu] = useState(false);

	const hamburger_active = (e) => {
		setSideMenu(!sideMenu);
		e.target.classList.toggle("active");

	};

	const menus = [
		"Home",
		"Pizza Menu",
		"pizza builder",
		"blog",
		"pages",
		"about us",
		"contact",
	];

	const menu2s = ["login", "my account", "checkout"];

	function classList(classes) {
		return Object.entries(classes)
			.filter((entry) => entry[1])
			.map((entry) => entry[0])
			.join(" ");
	}

	return (
		<div>
			<div className={classList({
				'menu_sideBar' : true,
				'active': sideMenu
			})}>
				<div className="searchBar">
					<input type="text" placeholder="Search" />{" "}
					<FontAwesomeIcon icon={Search} />
				</div>
				<ul>
					{menus.map((menu) => {
						return <li>{menu}</li>;
					})}
				</ul>
				<div className="line"></div>

				<ul className="menu_tier2">
					{menu2s.map((menu) => {
						return <li>{menu}</li>;
					})}
				</ul>
			</div>
			<div className="header">
				<div className={classList({
					'hamburger': true,
					'trigger': sideMenu
				})}>
					<Hamburger onClick={hamburger_active} />
				</div>
				<div className="logo">Margherita</div>
				<div className="shoppingCart">
					{/* <img src={shoppingCart} alt="" /> */}
					<IconButton aria-label="cart">
						<StyledBadge badgeContent={4} color="secondary">
							<ShoppingCartIcon />
						</StyledBadge>
					</IconButton>
				</div>
			</div>
		</div>
	);
}
