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
				<img src={Session21} alt="poster" className={css(styles.poster)} />
				<img src={Session20} alt="poster" className={css(styles.poster)} />
				<img src={Session19} alt="poster" className={css(styles.poster)} />
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
