import { StyleSheet, css } from "aphrodite";
import React from "react";
import { COLORS } from "../../styles/Constants";
import Mission from "../../assets/icons/MISSION.png";
import VisionM from "../../assets/icons/VISION.png";

const Vision = () => {
	return (
		<div className={css(styles.root)} id="vision">
			<div className={css(styles.contents)}>
				<div className={css(styles.missionCard)}>
					<div className={css(styles.cardContents)}>
						<div className={css(styles.titleBox)}>
							<img src={Mission} alt="icn" className={css(styles.titleIcon)} />
							<span className={css(styles.title)}>MISSION</span>
						</div>
						<div className={css(styles.description)}>
						Cusat Club is a peer group of energetic students committed to revolutionizing the student community for a better tomorrow.
We work to bring in the best tech experts, mentors, guides, and industry professionals onboard our sessions so that they can guide the students and help them have a vision for an exciting career. <br/>
The organisation keeps a watch on internship opportunities and guides as well as trains students to bag those internships.
Cusat Clubs in all manners can be most aptly regarded as the one-stop-shop for the needs of all students whether internships or training or informative sessions.
						</div>
					</div>
				</div>
				<div className={css(styles.visionCard)}>
					<div className={css(styles.cardContents)}>
						<div className={css(styles.titleBox)}>
							<img src={VisionM} alt="icn" className={css(styles.titleIcon)} />
							<span className={css(styles.title)}>VISION</span>
						</div>
						<div className={css(styles.description)}>
						Our vision is to be the best companion of a Cusatian in his journey towards a superb future and we describe it as “Towards a greater life, every stride together”. <br/>
						We look ahead to widening our spectrum of programs and open a huge platform for techies and students-in-tech to engage with each other, provide classes, guidance, trainings and much more.
Cusat Clubs aims to introduce freshers to a whole new world of tech related stuff, wherein they can find answers to much of their queries and doubts as such. <br/>
We look on to bridging the gap between students and expert
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
		marginRight: 57,
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
		width: "40px",
		height: "40px"
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

export default Vision;
