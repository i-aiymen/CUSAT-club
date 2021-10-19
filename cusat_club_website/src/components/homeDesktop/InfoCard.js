import { StyleSheet, css } from "aphrodite";
import React from "react";
import { COLORS } from "../../styles/Constants";

const InfoCard = () => {
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.container)}>
				<div className={css(styles.titleBox)}>
					<img src="" alt="icn" className={css(styles.titleIcon)} />
					<span className={css(styles.title)}>
						WANT TO ENGINEER YOUR FUTURE
					</span>
				</div>
				<div className={css(styles.whiteCards)}>
					<div className={css(styles.whiteCard)}>LEARN INDUSTRY SKILLS</div>
					<div className={css(styles.whiteCard)}>DO INTERNSHIPS</div>
				</div>
				<div className={css(styles.greenCards)}>
					<div className={css(styles.greenCard)}>
						Join our events to get an insight into the working of various
						industries
					</div>
					<div className={css(styles.greenCard)}>
						Join our discord server to get regular updates of internship
						opportunities in various domains
					</div>
				</div>
			</div>
		</div>
	);
};

const styles = StyleSheet.create({
	root: {
		marginTop: 40,
		marginLeft: 57,
		marginRight: 57,
	},
	container: {
		background: COLORS.secondary,
		borderRadius: 20,
		padding: "50px 35px 50px 35px",
		display: "flex",
		flexDirection: "column",
	},
	titleBox: {
		maxWidth: 770,
		width: "auto",
		height: 58,
		borderRadius: 7,
		background: "#D4887B",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 15,
		paddingRight: 15,
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		lineHeight: "50px",
		color: COLORS.primary,
	},
	whiteCards: {
		display: "flex",
		flexDirection: "row",
		columnGap: 40,
		marginTop: 55,
	},
	greenCards: {
		display: "flex",
		flexDirection: "row",
		columnGap: 40,
		marginTop: 55,
	},
	whiteCard: {
		display: "flex",
		width: "100%",
		minHeight: 260,
		background: COLORS.primary,
		color: COLORS.tertiary,
		fontSize: 40,
		lineHeight: "61px",
		fontWeight: "bold",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	greenCard: {
		display: "flex",
		width: "100%",
		minHeight: 260,
		background: COLORS.tertiary,
		color: COLORS.primary,
		fontSize: 30,
		lineHeight: "40px",
		fontWeight: "bold",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 30,
		paddingRight: 30,
		borderRadius: 60,
	},
});

export default InfoCard;
