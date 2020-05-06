import React ,{useState}from "react";
import { ReactComponent as Hamburger } from "./asset/pic/hamburger.svg";
import shoppingCart from "./asset/pic/shoppingCart.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

export default function Header() {

    const [hamActive, sethamActive] = useState(false);

	const StyledBadge = withStyles((theme) => ({
		badge: {
			right: 5,
			top: 5,
			border: `2px solid ${theme.palette.background.paper}`,
			padding: "0 4px",
		},
	}))(Badge);

	const hamburger_active = (e) => {
		e.target.classList.toggle("active");
    };
    
	return (
		<div>
			<div className="header">
				<div className="hamburger">
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
