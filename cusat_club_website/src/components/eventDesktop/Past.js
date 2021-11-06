import { StyleSheet, css } from "aphrodite";
import React from "react";
import Poster from "../../assets/logo/event.png";
import { COLORS } from "../../styles/Constants";

const Up = () => {

	return (

        <>
            <div className={css(styles.secondRow)}>
                <img src={Poster} alt="poster" className={css(styles.poster)} />
                <img src={Poster} alt="poster" className={css(styles.poster)} />
                <img src={Poster} alt="poster" className={css(styles.poster)} />
            </div>
            <div className={css(styles.thirdRow)}>
                <div className={css(styles.subtTitle)}>
                    CLICK ON THE POSTER TO VIEW
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
		minWidth: 335,
		minHeight: 335,
		borderRadius: 15,
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
		width: 52,
		height: 12,
		borderRadius: 120,
		background: COLORS.tertiary,
		marginTop: 15,
		marginBottom: 30,
	},
});

export default Up;
