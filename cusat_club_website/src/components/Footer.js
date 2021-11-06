import { StyleSheet, css } from "aphrodite";
import React from "react";
import "../arrow.css"
import { COLORS } from "../styles/Constants";
import Linkedin from "../assets/icons/linkedin.png";
import Insta from "../assets/icons/insta.png";
import You from "../assets/icons/youtube.png";
import Git from "../assets/icons/github-11-256.png";
import Mail from "../assets/icons/mail footer.png";
import Loc from "../assets/icons/location footer.png";
const Footer = () => {
	return (
		<div className={css(styles.root)} id="footer">
			<div className={css(styles.container)}>
				<div className={css(styles.divider)}></div>
				<div className={css(styles.footer)}>
					<div className={css(styles.firstRow)}>
						<div className={css(styles.follow)}>FOLLOW US</div>
						<a href="https://www.linkedin.com/company/cusat-clubs/" target='_blank' rel="noopener noreferrer">
							<div className="socials">
								<span className="dot"><img src={Linkedin} alt="icon" className="img"/></span>
								<span className="socialIcon">Linkedin</span>
							</div>
						</a>
						<a href="https://instagram.com/cusatclubs" target='_blank' rel="noopener noreferrer">
							<div className="socials">
								<span className="dot"><img src={Insta} alt="icon" className="img img1"/></span>
								<span className="soc">Instagram</span>
							</div>
						</a>
						<a href="https://youtube.com/channel/UCHNnMXlyn5tQIz71Fdp-6tg" target='_blank' rel="noopener noreferrer">
							<div className="socials">
								<span className="dot"><img src={You} alt="icon" className="img img2"/></span>
								<span className="socialIcon1">Youtube</span>
							</div>
						</a>
						<a href="https://github.com/cusat-clubs" target='_blank' rel="noopener noreferrer">
							<div className="socials">
								<span className="dot"><img src={Git} alt="icon" className="img3"/></span>
								<span className="soc">Github</span>
							</div>
						</a>
						{/* <div className={css(styles.socials)}>
							<img src="" alt="icon" />
							<span className={css(styles.socialIcon)}></span>
						</div> */}
					</div>
					<div className={css(styles.secondRow)}>
						<div className={css(styles.addressIcon)}>
							<img src={Mail} alt="icon" className="foot_icon"/>
							<span className="addressLinks">+91 823 580 1382</span>
						</div>
						<a href="mailto:cusatclubs@gmail.com">
							<div className={css(styles.addressIcon)}>
								<img src={Mail} alt="icon" className="foot_icon1"/>
								<span className="addressLinks">cusatclubs@gmail.com</span>
							</div>
						</a>

						<div className={css(styles.addressIcon)}>
							<img src={Loc} alt="icon" className="foot_icon2"/>
							<span className="addressLinks">Kerala, India</span>
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
	

});

export default Footer;
