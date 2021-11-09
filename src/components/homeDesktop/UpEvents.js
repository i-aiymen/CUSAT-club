import { StyleSheet, css } from "aphrodite";
import React from "react";
import "../../arrow.css"
import { COLORS } from "../../styles/Constants";
import UPCOMING from "../../assets/icons/UPCOMING.png";
import Carousel from "react-elastic-carousel";
import Session19 from "../../assets/sessions/Session 19.jpg";
import Session20 from "../../assets/sessions/Session 20.jpg";
import Session21 from "../../assets/sessions/Session 21.jpg";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
];

const UpEvents = () => {
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.container)}>
				<div className={css(styles.contents)}>
					<div className={css(styles.firstRow)}>
						<div className={css(styles.titleBox)}>
							<img src={UPCOMING} alt="icn" className={css(styles.titleIcon)} />
							<span className={css(styles.title)}>UPCOMING EVENTS</span>
						</div>
					</div>
					<Carousel breakPoints={breakPoints} showArrows={false}>
						<a href="https://www.eventbrite.com/e/tips-to-crack-civil-service-exams-by-an-ias-officer-tickets-205488290007?aff=ebdsoporgprofile" target='_blank' rel="noopener noreferrer"><img src={Session21} alt="poster" className={css(styles.poster1)} /></a>
						<a href="https://www.eventbrite.com/e/life-of-a-technical-program-manager-tickets-194422010467?aff=ebdsoporgprofile" target='_blank' rel="noopener noreferrer"><img src={Session20} alt="poster" className={css(styles.poster1)} /></a>
						<a href="https://www.eventbrite.com/e/job-opportunities-in-mechanical-engineering-tickets-190973826857?aff=ebdsoporgprofile" target='_blank' rel="noopener noreferrer"><img src={Session19} alt="poster" className={css(styles.poster1)} /></a>
					</Carousel>
					<div className={css(styles.thirdRow)}>
						<div className={css(styles.subtTitle)}>
							CLICK ON THE POSTER TO REGISTER
						</div>
						<div className={css(styles.motion)}></div>
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
		background: COLORS.primary,
		borderRadius: 15,
		display: "flex",
		flexDirection: "column",
	},
	firstRow: {
		display: "flex",
		flexDirection: "row",
		margin: "50px 35px 50px 35px",
		marginLeft: 50,
		justifyContent: "space-between",
		alignItems: "center",
		'@media only screen and (max-width: 1500px)': {
			marginLeft: 35,

		},
	},
	titleBox: {
		width: "auto",
		height: 58,
		borderRadius: 7,
		background: COLORS.tertiary,
		display: "inline-flex",
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
	titleIcon: {
		marginRight: 11,
		width: "40px",
		height: "40px"
	},
	iconSec: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	iconText: {
		fontSize: 30,
		fontWeight: "37px",
		color: COLORS.tertiary,
	},
	secondRow: {
		display: "flex",
		flexDirection: "row",
		columnGap: 40,
		marginLeft: 35,
		marginRight: 35,
		marginTop: 60,
		justifyContent: "space-between",
		alignItems: "center",
	},
	poster: {
		':hover': {
			opacity: "0.8",
		},
		margin: "0 25px",
		minWidth: 300,
		minHeight: 300,
		borderRadius: 15,
		cursor: "pointer"
	},
	poster1: {
		':hover': {
			opacity: "0.8",
		},
		
		// margin: "0 25px",
		width: 406,
		height: 370,
		borderRadius: 15,
		cursor: "pointer",
		'@media only screen and (max-width: 1870px)': {
			
			width: 489,
			height: 489,

		},
		'@media only screen and (max-width: 1680px)': {
			width: 421,
			height: 421,

		},
		'@media only screen and (max-width: 1500px)': {
			width: 406,
			height: 365,
			

		},
		'@media only screen and (max-width: 1420px)': {
			width: 360,
			height: 365,
			

		},
	},

	thirdRow: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 30,
		color: COLORS.tertiary,
		fontSize: 30,
		lineHeight: "37px",
	},
	motion: {
		marginTop: 15,
		marginBottom: 15,
	},
});

export default UpEvents;
