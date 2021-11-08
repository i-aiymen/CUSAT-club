import { StyleSheet, css } from "aphrodite";
import React from "react";
// import Poster from "../../assets/images/event.png";
import { COLORS } from "../../styles/Constants";
import Time from "../../assets/icons/timeline meeting.png";

const TimeLine = () => {
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.container)}>
				<div className={css(styles.contents)}>
					<div className={css(styles.firstRow)}>
						<div className={css(styles.titleBox)}>
							<img src={Time} alt="icn" className={css(styles.titleIcon)} />
							<span className={css(styles.title)}>TIMELINE</span>
						</div>
					</div>
					<div className={css(styles.SecondRow)}>
						<div className="hero">
							<div id="calendar"></div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className={css(styles.container1)}>
				<div className={css(styles.contents)}>
					<div className={css(styles.firstRow)}>
						<div className={css(styles.titleBox)}>
							
							<img src="" alt="icn" className={css(styles.titleIcon)} />
							<span className={css(styles.title)}>MEETINGS</span>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

const styles = StyleSheet.create({
	root: {
		marginTop: 40,
		marginLeft: 57,
		marginRight: 18,
		display: "flex",
		flexDirection: "row",
	},
	container: {
		background: COLORS.primary,
		borderRadius: 15,
		marginRight: 40,
		width: "100%",
		padding: 25,
		paddingTop: 0,
		// height: 650,
		
	},
	container1: {
		background: COLORS.primary,
		// width: 500,
		// height: 650,
		borderRadius: 15,
	},
	firstRow: {
		display: "flex",
		flexDirection: "row",
		margin: "30px 35px 30px 35px",
		marginLeft: 0,
		justifyContent: "space-between",
		alignItems: "center",
	},
	titleBox: {
		width: "auto",
		height: 58,
		borderRadius: 7,
		display: "inline-flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 10,
		paddingRight: 15,
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		lineHeight: "50px",
		color: COLORS.tertiary,
	},
	titleIcon: {
		marginRight: 15,
		width: "37px",
		height: "37px"
	},
});

export default TimeLine;
