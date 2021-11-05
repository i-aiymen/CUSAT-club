import { StyleSheet, css } from "aphrodite";
import React from "react";
import { COLORS } from "../../styles/Constants";
import '../../arrow.css';

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
						Looking for Mentorship,then undoubtedly Cusat Club is the place for you! Here, complexities are simplified and ideas are structured paving way to achieve the impossible.
What started small, with a handful of people is now a well-oiled machine with clear vision. Over an year, Cusat Club has grown and today it stands strongly with many other clubs of Cusat as it's members. Focusing of spreading knowledge and guiding students to achieve there dreams have been the source of encouragement for the Cusat Club. Challenges and experiences have made us better over an year and helped polish ourselves to what we are today.
						{/* <br/> <br/>
						Some of the clubs are:
						<br/> <br/>
						<span className="club">Google Developer Student Clubs (GDSC)</span> are community groups for college and university students interested in Google developer technologies.
						<br/><br/>
						<span className="club">Agora</span> is the leading video, voice and live interactive streaming platform, helping developers deliver rich in-app experiences.
						<br/><br/>
						<span className="club">TinkerHub foundation</span> is a non-profit initiative that targets the youth with the aid of the latest technology to evoke a skilled generation with technical and social skills.
						<br/><br/>
						<span className="club">The Institute of Electrical and Electronics Engineering (IEEE)</span>.A student branch of the IEEE was established in the university in 1986 as the 4th Student Branch Chapter in IEEE Kerala section.
						<br/><br/>
						<span className="club">IGBC( Indian Green Building Council)</span> is a non profit organization which strives to bring about best energy and environment practices. IGBC CUSAT Student Chapter is an initiative towards the same.
						<br/><br/>
						<span className="club">Hack Club CUCEK</span> is a chapter of the international non-profit Hack Club. The goal of Hack Club is to help students become a hacker. It needs a space where people are making interesting things with code, every week.					
						<br/><br/>
						<span className="club">IRES-SEDS CUSAT</span>  ,a local chapter of SEDS INDIA is the aerospace society of CUSAT. SEDS (Students for the Exploration and Development of Space) is international non-profit organization provide a premier platform for broadening one's knowledge by engaging in space-sciences and related fields and as well as act as a centre for networking and opportunities. */}

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
