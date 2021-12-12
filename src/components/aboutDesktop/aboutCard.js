import { StyleSheet, css } from "aphrodite";
import React from "react";
import { COLORS } from "../../styles/Constants";
import '../../arrow.css';
import Mission from "../../assets/icons/MISSION.png";

const About = () => {
	return (
		<div className={css(styles.root)} id="vision">
			<div className={css(styles.contents)}>
				<div className={css(styles.missionCard)}>
					<div className={css(styles.cardContents)}>
						<div className={css(styles.titleBox)}>
							<img src={Mission} alt="icn" className={css(styles.titleIcon)} />
							<span className={css(styles.title)}>ABOUT ENGINEERS LEAGUE</span>
						</div>
						<div className={css(styles.description)}>
						Looking for Mentorship,then undoubtedly Engineers League is the place for you! Here, complexities are simplified and ideas are structured paving way to achieve the impossible.
What started small, with a handful of people is now a well-oiled machine with clear vision. Over a year, Engineers League has grown and today it represents many clubs of Cusat as its member. Focusing on spreading knowledge and guiding students to achieve their dreams have been the source of encouragement for the Engineers League. Challenges and experiences have made us better over a year and helped polish ourselves to what we are today.

						<br/> <br/>
						Some of the clubs are:
						<br/> <br/>
						Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies.

						<br/><br/>
						Agora is the leading video, voice and live interactive streaming platform, helping developers deliver rich in-app experiences.
						<br/><br/>
						TinkerHub foundation is a non-profit initiative that targets the youth with the aid of the latest technology to evoke a skilled generation with technical and social skills.
						<br/><br/>
						The Institute of Electrical and Electronics Engineering (IEEE).A student branch of the IEEE was established in the university in 1986 as the 4th Student Branch Chapter in IEEE Kerala section.
						<br/><br/>
						IGBC( Indian Green Building Council) is a non profit organization which strives to bring about best energy and environment practices. IGBC CUSAT Student Chapter is an initiative towards the same.
						<br/><br/>
						Hack Club CUCEK is a chapter of the international non-profit Hack Club. The goal of Hack Club is to help students become a hacker. It needs a space where people are making interesting things with code, every week.
						<br/><br/>
						IRES-SEDS CUSAT  ,a local chapter of SEDS INDIA is the aerospace society of CUSAT. SEDS (Students for the Exploration and Development of Space) is international non-profit organization provide a premier platform for broadening one's knowledge by engaging in space-sciences and related fields and as well as act as a centre for networking and opportunities.
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

export default About;
