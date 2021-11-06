import { StyleSheet, css } from "aphrodite";
import React from "react";
import Poster from "../../assets/images/event.png";
import { COLORS } from "../../styles/Constants";
import UPCOMING from "../../assets/icons/UPCOMING.png";

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
						{/* <div className={css(styles.iconSec)}>
							<span className={css(styles.iconText)}>Explore more</span>
							<div className={css(styles.icons)}>
								<img src="" alt="more" className={css(styles.icon)} />
							</div>
						</div> */}
					</div>
					<div className={css(styles.secondRow)}>
						<img src={Poster} alt="poster" className={css(styles.poster)} />
						<img src={Poster} alt="poster" className={css(styles.poster)} />
						<img src={Poster} alt="poster" className={css(styles.poster)} />
					</div>
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
		justifyContent: "space-between",
		alignItems: "center",
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
		minWidth: 335,
		minHeight: 335,
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
		width: 52,
		height: 12,
		borderRadius: 120,
		background: COLORS.tertiary,
		marginTop: 15,
		marginBottom: 30,
	},
});

export default UpEvents;
