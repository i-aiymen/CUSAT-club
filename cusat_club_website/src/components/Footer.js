import { StyleSheet, css } from "aphrodite";
import React from "react";
import "../arrow.css"
import { COLORS } from "../styles/Constants";
import Linkedin from "../assets/icons/linkedin.png";
import Insta from "../assets/icons/insta.png";
import You from "../assets/icons/youtube.png";
import Git from "../assets/icons/github-11-256.png";
const Footer = () => {
	return (
		<div className={css(styles.root)} id="footer">
			<div className={css(styles.container)}>
				<div className={css(styles.divider)}></div>
				<div className={css(styles.footer)}>
					<div className={css(styles.firstRow)}>
						<div className={css(styles.follow)}>FOLLOW US</div>
						<div className={css(styles.socials)}>
							<span className="dot"><img src={Linkedin} alt="icon" className="img"/></span>
							<span className={css(styles.socialIcon)}>Linkedin</span>
						</div>
						<div className={css(styles.socials)}>
							<span className="dot"><img src={Insta} alt="icon" className="img img1"/></span>
							<span style={{fontWeight:"bold"}}>Instagram</span>
						</div>
						<div className={css(styles.socials)}>
							<span className="dot"><img src={You} alt="icon" className="img img2"/></span>
							<span className={css(styles.socialIcon1)}>Youtube</span>
						</div>
						<div className={css(styles.socials)}>
							<span className="dot"><img src={Git} alt="icon" className="img3"/></span>
							<span style={{fontWeight:"bold"}}>Github</span>
						</div>
						{/* <div className={css(styles.socials)}>
							<img src="" alt="icon" />
							<span className={css(styles.socialIcon)}></span>
						</div> */}
					</div>
					<div className={css(styles.secondRow)}>
						<div className={css(styles.addressIcon)}>
							<img src="" alt="icon" />
							<span className={css(styles.addressLinks)}>+91 XXX XXX XXXX</span>
						</div>
						<div className={css(styles.addressIcon)}>
							<img src="" alt="icon" />
							<span className={css(styles.addressLinks)}>cusatclubs@gmail.com</span>
						</div>
						<div className={css(styles.addressIcon)}>
							<img src="" alt="icon" />
							<span className={css(styles.addressLinks)}>Kerala, India</span>
						</div>
					</div>
					<div className={css(styles.thirdRow)}>
						Copyright @ 2021 CUSAT CLUBS. All rights reserved.
					</div>
				</div>
			</div>
		</div>
	);
};

const styles = StyleSheet.create({
	root: {
		marginTop: 110,
	},
	container: {
		display: "flex",
		flexDirection: "column",
	},
	divider: {
		height: 5,
		background: COLORS.primary,
		marginBottom: 10,
	},
	firstRow: {
		height: 80,
		background: COLORS.primary,
		display: "flex",
		flexDirection: "row",
		color: COLORS.tertiary,
		justifyContent: "center",
		alignItems: "center",
		columnGap: 50,
		fontSize: 18,
	},
	follow: {
		fontWeight: "bold"
	},
	secondRow: {
		height: 217,
		background: COLORS.tertiary,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		columnGap: 175,
	},
	thirdRow: {
		display: "flex",
		color: COLORS.tertiary,
		justifyContent: "center",
		alignItems: "center",
		fontSize: 18,
		margin: 10,
	},
	socialIcon: {
		position: "relative",
		top: "8px",
		fontWeight: "bold"
	},
	socialIcon1: {
		position: "relative",
		top: "3px",
		fontWeight: "bold"
	}

});

export default Footer;
