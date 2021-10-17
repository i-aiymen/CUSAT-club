import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom";
import { COLORS } from "../styles/Constants";
import Logo from "../assets/images/Logo.png";

const Header = () => {
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.navBar)}>
				<div className={css(styles.left)}>
					<img src={Logo} alt="Logo" className={css(styles.logoImg)} />
					<span className={css(styles.logoName)}> CUSAT CLUBS </span>
				</div>
				<div className={css(styles.right)}>
					<div className={css(styles.pageNavs)}>
						<Link to="/" className={css(styles.links)}>
							{" "}
							Home
						</Link>
						<Link to="/about" className={css(styles.links)}>
							{" "}
							About
						</Link>
						<Link to="/events" className={css(styles.links)}>
							{" "}
							Events
						</Link>
						<Link to="/team" className={css(styles.links)}>
							{" "}
							Team
						</Link>
						<Link to="/contact" className={css(styles.links)}>
							{" "}
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
const styles = StyleSheet.create({
	root: {
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 68,
		marginRight: 68,
	},
	navBar: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginLeft: "auto",
		marginRight: "auto",
		background: COLORS.primary,
		minHeight: 68,
		borderRadius: 16,
		maxWidth: 1424,
	},

	left: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	logoImg: {
		width: 46,
		height: 46,
		marginLeft: 42,
	},
	logoName: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#015546",
		lineHeight: "37px",
		marginLeft: 36,
	},
	right: {
		marginRight: 52,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	links: {
		textDecoration: "none",
		fontSize: 20,
		lineHeight: "30px",
		fontWeight: "bold",
		color: "#1B2F5B",
		marginLeft: 55,
	},
});

export default Header;
