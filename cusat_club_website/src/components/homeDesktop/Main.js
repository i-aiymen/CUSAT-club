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
		marginTop: 40,
		marginLeft: 85,
		marginRight: 85,
		justifyContent: "center",
		alignItems: "center",
	},
	contents: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginLeft: "auto",
		marginRight: "auto",
		maxWidth: 1780,
	},
	mainCard: {
		width: 1110,
		height: 835,
		background:
			"transparent linear-gradient(180deg, #4ECDB0 0%, #407ACE 100%) 0% 0% no-repeat padding-box",
		borderRadius: 20,
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
		width: 299,
		height: 306,
		marginTop: 121,
	},
	mainCardTitle: {
		marginTop: 58,
		fontSize: 100,
		fontWeight: "bold",
		lineHeight: "58px",
		color: COLORS.primary,
	},
	mainCardDesc: {
		marginTop: 25,
		fontSize: 48,
		fontWeight: "bold",
		lineHeight: "58px",
		color: COLORS.primary,
	},
	icon: {
		bottom: 23,
		display: "flex",
		flexDirection: "column",
		marginLeft: "100%",
		marginRight: 80,
		marginBottom: 24,
	},
	bar: {
		width: 3,
		height: 14,
		borderRadius: 10,
		background: COLORS.primary,
		marginBottom: 10,
		marginLeft: 20,
	},
	arrowIcon: {
		height: 35,
		width: 45,
		color: COLORS.primary,
		paddingRight: 10,
	},
	clubCards: {
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		rowGap: 66,
		columnGap: 52,
	},
	clubCard: {
		width: 159,
		height: 159,
		background: COLORS.primary,
		borderRadius: 20,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	clubLogo: {
		maxWidth: 150,
		maxHeight: 1150,
	},
});

export default Main;
