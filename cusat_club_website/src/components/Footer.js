import { StyleSheet, css } from "aphrodite";
import React from "react";
import { COLORS } from "../styles/Constants";
const Footer = () => {
	return (
		<div className={css(styles.root)} id="footer">
			<div className={css(styles.container)}>
				<div className={css(styles.divider)}></div>
				<div className={css(styles.footer)}>
					<div className={css(styles.firstRow)}>
						<div className={css(styles.follow)}>FOLLOW US</div>
						<div className={css(styles.socials)}>
							<img src="" alt="icon" />
							<span className={css(styles.socialIcon)}>Linkedin</span>
						</div>
						<div className={css(styles.socials)}>
							<img src="" alt="icon" />
							<span className={css(styles.socialIcon)}>Instagram</span>
						</div>
						<div className={css(styles.socials)}>
							<img src="" alt="icon" />
							<span className={css(styles.socialIcon)}>Youtube</span>
						</div>
						<div className={css(styles.socials)}>
							<img src="" alt="icon" />
							<span className={css(styles.socialIcon)}>Github</span>
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
