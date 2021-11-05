import React from "react";
import '../arrow.css';
import { StyleSheet, css } from "aphrodite";
import { NavLink} from "react-router-dom";
import { COLORS } from "../styles/Constants";
import Logo from "../assets/images/Logo.png";
import { Link as Link2} from "react-scroll";

const Header = ({ event }) => {

	
	
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.navBar)}>
				<div className={css(styles.left)}>
					<img src={Logo} alt="Logo" className={css(styles.logoImg)} />
					<span className={css(styles.logoName)}> CUSAT CLUBS </span>
				</div>
				<div className={css(styles.right)}>
					<div className={css(styles.pageNavs)}>
						<NavLink exact to="/"  className="links"  activeClassName={css(styles.active_link)}>
							
							Home
						</NavLink>
						
						<NavLink exact to="/about" className="links" activeClassName={css(styles.active_link)}>
							
							About
						</NavLink>
						<a href="/events" className={event ? "link" : "links"} >
							Events
						</a>
						<NavLink exact to="/team" className="links" activeClassName={css(styles.active_link)}>
							
							Team
						</NavLink>
						<Link2 to="footer" className="links" smooth={true} duration={1500} style={{cursor: "pointer"}}>
							
							Contact Us
						</Link2>
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
		marginLeft: 57,
		marginRight: 57,
	},
	navBar: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginLeft: "auto",
		marginRight: "auto",
		background: COLORS.primary,
		height: 64,
		borderRadius: 20,
		maxWidth: "100%",
	},

	active_link: {
		color: "rgb(22, 165, 150)",
		borderBottom: "3px solid rgb(22, 165, 150)",
		// textDecoration: "underline",
	},

	left: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	logoImg: {
		width: 38,
		height: 38,
		marginLeft: 35,
	},
	logoName: {
		fontSize: 25,
		fontWeight: "bold",
		color: "#015546",
		lineHeight: "37px",
		marginLeft: 29,
	},
	right: {
		marginRight: 35,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	links: {
		textDecoration: "none",
		fontSize: 22,
		lineHeight: "30px",
		fontWeight: "bold",
		color: "#1B2F5B",
		marginLeft: 37,
	},
	
});

export default Header;
