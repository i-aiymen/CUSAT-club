import React from "react";
import { StyleSheet, css } from "aphrodite";
import MsAmb from "../../assets/images/microsoftamb.png";
import Logo from "../../assets/images/Logo.png";
import Arrow from "../../assets/icons/long_down.svg";
import { COLORS } from "../../styles/Constants";

const Main = () => {
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.contents)}>
				<div className={css(styles.mainCard)}>
					<div className={css(styles.top)}>
						<img src={Logo} alt="Big Logo" className={css(styles.bigLogo)} />
						<span className={css(styles.mainCardTitle)}> CUSAT CLUBS </span>
						<span className={css(styles.mainCardDesc)}>
							ENGINNERING YOUR FUTURE
						</span>
					</div>
					<div className={css(styles.icon)}>
						<div className={css(styles.bar)}></div>
						<div className={css(styles.bar)}></div>
						<img
							src={Arrow}
							alt="icon-down-arrow"
							className={css(styles.arrowIcon)}
						/>
					</div>
				</div>
				<div className={css(styles.clubCards)}>
					<div className={css(styles.clubCard)}>
						<img src={MsAmb} alt="club-logo" className={css(styles.clubLogo)} />
					</div>
					<div className={css(styles.clubCard)}>
						<img src={MsAmb} alt="club-logo" className={css(styles.clubLogo)} />
					</div>
					<div className={css(styles.clubCard)}>
						<img src={MsAmb} alt="club-logo" className={css(styles.clubLogo)} />
					</div>
					<div className={css(styles.clubCard)}>
						<img src={MsAmb} alt="club-logo" className={css(styles.clubLogo)} />
					</div>
					<div className={css(styles.clubCard)}>
						<img src={MsAmb} alt="club-logo" className={css(styles.clubLogo)} />
					</div>
					<div className={css(styles.clubCard)}>
						<img src={MsAmb} alt="club-logo" className={css(styles.clubLogo)} />
					</div>
					<div className={css(styles.clubCard)}>
						<img src={MsAmb} alt="club-logo" className={css(styles.clubLogo)} />
					</div>
					<div className={css(styles.clubCard)}>
						<img src={MsAmb} alt="club-logo" className={css(styles.clubLogo)} />
					</div>
					<div className={css(styles.clubCard)}>
						<img src={MsAmb} alt="club-logo" className={css(styles.clubLogo)} />
					</div>
					<div className={css(styles.clubCard)}>
						<img src={MsAmb} alt="club-logo" className={css(styles.clubLogo)} />
					</div>
					<div className={css(styles.clubCard)}>
						<img src={MsAmb} alt="club-logo" className={css(styles.clubLogo)} />
					</div>
					<div className={css(styles.clubCard)}>
						<img src={MsAmb} alt="club-logo" className={css(styles.clubLogo)} />
					</div>
				</div>
			</div>
		</div>
	);
};

const styles = StyleSheet.create({
	root: {
		color: "white",
		marginTop: 27,
		marginLeft: 57,
		marginRight: 57,
		justifyContent: "center",
		alignItems: "center",
	},
	contents: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginLeft: "auto",
		marginRight: "auto",
		maxWidth: 1187,
	},
	mainCard: {
		width: 740,
		height: 557,
		background:
			"transparent linear-gradient(180deg, #4ECDB0 0%, #407ACE 100%) 0% 0% no-repeat padding-box",
		borderRadius: 13,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
	},
	top: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	bigLogo: {
		width: 199,
		height: 204,
		marginTop: 81,
	},
	mainCardTitle: {
		marginTop: 39,
		fontSize: 67,
		fontWeight: "bold",
		lineHeight: "58px",
		color: COLORS.primary,
	},
	mainCardDesc: {
		marginTop: 17,
		fontSize: 32,
		fontWeight: "bold",
		lineHeight: "58px",
		color: COLORS.primary,
	},
	icon: {
		bottom: 15,
		display: "flex",
		flexDirection: "column",
		marginLeft: "100%",
		marginRight: 53,
		marginBottom: 16,
	},
	bar: {
		width: 2,
		height: 9,
		borderRadius: 7,
		background: COLORS.primary,
		marginBottom: 7,
		marginLeft: 14,
	},
	arrowIcon: {
		height: 23,
		width: 30,
		color: COLORS.primary,
		paddingRight: 7,
	},
	clubCards: {
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		rowGap: 44,
		columnGap: 35,
	},
	clubCard: {
		width: 106,
		height: 106,
		background: COLORS.primary,
		borderRadius: 14,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	clubLogo: {
		maxWidth: 100,
		maxHeight: 100,
	},
});

export default Main;
