import { StyleSheet, css } from "aphrodite";
import React from "react";
import { COLORS } from "../../styles/Constants";
import Carousel from "react-elastic-carousel";
import Session19 from "../../assets/sessions/Session 19.jpg";
import Session20 from "../../assets/sessions/Session 20.jpg";
import Session21 from "../../assets/sessions/Session 21.jpg";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
];

const Up = () => {

	return (

        <>
			<Carousel breakPoints={breakPoints}>
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
        </>
        
						
	);
};



const styles = StyleSheet.create({
	
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

export default Up;
