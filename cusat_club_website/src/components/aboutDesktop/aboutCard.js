import { StyleSheet, css } from "aphrodite";
import React from "react";
import { COLORS } from "../../styles/Constants";

const About = () => {
	return (
		<div className={css(styles.root)} id="vision">
			<div className={css(styles.contents)}>
				<div className={css(styles.missionCard)}>
					<div className={css(styles.cardContents)}>
						<div className={css(styles.titleBox)}>
							<img src="" alt="icn" className={css(styles.titleIcon)} />
							<span className={css(styles.title)}>ABOUT CUSAT CLUBS</span>
						</div>
						<div className={css(styles.description)}>
							Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do
							iusmod tempor incididunt ut labore et slore magna aliqua. Nulla at
							volutpat iam ut venenatis. Volutpat odio facilisis mauris sit
							amet. Hendrerit gravida rutrum quisque non. Volutpat aece nas
							volutpat blandit aliquam sutpat blandit aliquam etiam erat velit
							scelerisque in. Nulla malesuada pellentesque elit eget gravida cum
							sociis. Nisl rh
						</div>
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
		marginRight: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	contents: {
		display: "flex",
		flexDirection: "row",
	},
	missionCard: {
		background: COLORS.tertiary,
		minWidth: 458,
		minHeight: "auto",
		borderRadius: 14,
		marginRight: 30,
	},
	visionCard: {
		background: COLORS.secondary,
		minWidth: 666,
		minHeight: "auto",
		borderRadius: 14,
	},
	cardContents: {
		margin: 40,
	},
	titleBox: {
		width: "auto",
		height: 58,
		borderRadius: 7,
		background: "#D4887B",
		marginBottom: 24,
		display: "inline-flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 15,
		paddingRight: 15,
	},
	titleIcon: {
		marginRight: 11,
	},
	title: {
		fontSize: 30,
		lineHeight: 40,
		color: COLORS.primary,
	},
	description: {
		fontSize: 22,
		fontWeight: "bold",
		lineHeight: "30px",
		color: COLORS.primary,
	},
});

export default About;
