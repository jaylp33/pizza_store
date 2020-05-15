import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export default function StoreInfo() {
	return (
		<div className="storeInfo">
			<h2>
				We are pizza makers, and our mission is to make cool pizza which
				feeds all your senses.
			</h2>

			<h4>
				We prefer to rely on instinct and feel, measuring by hand, not
				by the gram. This is the authentic way to make pizza. Sure it’s
				a little unrefined, but we’re proud of that. It’s pizza like
				this which feeds your sense of sharing, adding flavour to those
				occasions when you get together with friends and family. And
				really, isn’t that what it’s all about? Because when pizza feeds
				all your senses, it’s not just great, it’s sensational.
			</h4>

			<div className="threeAdvantages">
				<div className="block_careful">
					<FontAwesomeIcon icon={faLeaf} />
					<h2>We’re Careful</h2>
					<h4>
						The crust is stored in a separate container, on a
						separate shelf in our fridge. The cheese, marinara sauce
						and pepperoni are stored in a designated kit, and every
						pizza is freshly baked on designated parchment paper in
						our ovens.
					</h4>
				</div>

				<div className="block_certified">
					<FontAwesomeIcon icon={faAward} />
					<h2>We’re Certified</h2>
					<h4>
						Our cheese-only and cheese-and-pepperoni gluten-free
						pizzas are prepared using the procedures certified by
						the Gluten Intolerance Group (GIG), and we take specific
						caution when making these pizzas.
					</h4>
				</div>

				<div className="block_creative">
					<FontAwesomeIcon icon={faRocket} />
					<h2>You’re Creative</h2>
					<h4>
						For those simply looking to reduce gluten in their
						diets, we offer a Create Your Own pizza option. The
						cheese, pepperoni and marinara come from our gluten-free
						kit, but all additional toppings are stored at our
						standard make table.
					</h4>
				</div>
			</div>
		</div>
	);
}
