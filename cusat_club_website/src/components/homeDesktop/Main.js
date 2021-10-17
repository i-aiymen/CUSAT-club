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
		marginTop: 32,
		marginLeft: 68,
		marginRight: 68,
		justifyContent: "center",
		alignItems: "center",
	},
	contents: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginLeft: "auto",
		marginRight: "auto",
		maxWidth: 1424,
	},
	mainCard: {
		width: 890,
		height: 668,
		background:
			"transparent linear-gradient(180deg, #4ECDB0 0%, #407ACE 100%) 0% 0% no-repeat padding-box",
		borderRadius: 16,
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
		width: 239,
		height: 244.8,
		marginTop: 96.8,
	},
	mainCardTitle: {
		marginTop: 46,
		fontSize: 80,
		fontWeight: "bold",
		lineHeight: "58px",
		color: COLORS.primary,
	},
	mainCardDesc: {
		marginTop: 16,
		fontSize: 38.4,
		fontWeight: "bold",
		lineHeight: "58px",
		color: COLORS.primary,
	},
	icon: {
		bottom: 23,
		display: "flex",
		flexDirection: "column",
		marginLeft: "100%",
		marginRight: 64,
		marginBottom: 19,
	},
	bar: {
		width: 2.4,
		height: 11,
		borderRadius: 8,
		background: COLORS.primary,
		marginBottom: 8,
		marginLeft: 16,
	},
	arrowIcon: {
		height: 28,
		width: 35.2,
		color: COLORS.primary,
		paddingRight: 8,
	},
	clubCards: {
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		rowGap: 52.8,
		columnGap: 41.6,
	},
	clubCard: {
		width: 127,
		height: 127,
		background: COLORS.primary,
		borderRadius: 16,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	clubLogo: {
		width: 120,
		maxHeight: 120,
	},
});

export default Main;
