import React from "react";
import '../../arrow.css';
import { StyleSheet, css } from "aphrodite";
import MsAmb from "../../assets/logo/MSLearn_SA_badge_generic_rgb_300ppi.png";
import Ieee from "../../assets/logo/IEEE black.png";
import Tink from "../../assets/logo/TinkerHub_SOE, CUSAT (1).png";
import Seds from "../../assets/logo/SEDS BLACK LOGO.png";
import Pie from "../../assets/logo/Pie & AI logo.png";
import Igbc from "../../assets/logo/logo-removebg-preview.png";
import Code from "../../assets/logo/codechef.png";
import Gdsc from "../../assets/logo/GDSC CUSAT  vertical color.png";
import Agora from "../../assets/logo/agoralightblue-1.png";
import Sae from "../../assets/logo/sae-international-logo-png-transparent.png";
import Hack from "../../assets/logo/hack.png";
import Horizon from "../../assets/logo/horizon.png";
import Logo from "../../assets/logo/engineers-league.png";
import { COLORS } from "../../styles/Constants";
import { Link } from "react-scroll";
import {MdSouth} from "react-icons/md"
import {MdOutlineHorizontalRule} from "react-icons/md"

const Main = () => {
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.contents)}>
				<div className={css(styles.mainCard)}>
					<div className={css(styles.top)}>
						<img src={Logo} alt="Big Logo" className={css(styles.bigLogo)} />
						<div className={css(styles.mainCardTitle)}> CUSAT CLUBS </div>
						<span className={css(styles.mainCardDesc)}>
							ENGINNERING YOUR FUTURE
						</span>
					</div>
					
					<div className="icon">
					<Link to="vision" smooth={true} duration={1000} >
						<MdOutlineHorizontalRule  className="bar"/>
						<MdOutlineHorizontalRule  className="bar"/>
						
						<MdSouth size="2em"/>
						</Link>
					</div>
					
				</div>
				<div className={css(styles.clubCards)}>
					<div className={css(styles.clubCard)}>
						<a href="https://ieeecusatsb.in" target='_blank' rel="noopener noreferrer"><img src={Ieee} alt="club-logo" className={css(styles.clubLogo)} /></a>
					</div>
					<div className={css(styles.clubCard)}>
						<img src={MsAmb} alt="club-logo" className={css(styles.clubLogo)} />
					</div>
					<div className={css(styles.clubCard)}>
						<a href="https://linktr.ee/tinkerhub_cusat" target='_blank' rel="noopener noreferrer"><img src={Tink} alt="club-logo" className={css(styles.clubLogo)} /></a>
					</div>
					<div className={css(styles.clubCard)}>
						<img src={Seds} alt="club-logo" className={css(styles.clubLogo)} />
					</div>
					<div className={css(styles.clubCard)}>
						<a href="http://cucek.hackclub.com" target='_blank' rel="noopener noreferrer"><img src={Hack} alt="club-logo" className={css(styles.clubLogo)} /></a>
					</div>
					<div className={css(styles.clubCard)}>
						<a href="https://github.com/voldemortuk/Pie-AI-Sessions" target='_blank' rel="noopener noreferrer"><img src={Pie} alt="club-logo" className={css(styles.clubLogo)} /></a>
					</div>
					<div className={css(styles.clubCard)}>
						<a href="http://igbc-cusat.in" target='_blank' rel="noopener noreferrer"><img src={Igbc} alt="club-logo" className={css(styles.clubLogo)} /></a>
					</div>
					<div className={css(styles.clubCard)}>
						<img src={Code} alt="club-logo" className={css(styles.clubLogo)} />
					</div>
					<div className={css(styles.clubCard)}>
					<a href="https://gdsc.community.dev/cochin-university-of-science-and-technology/" target='_blank' rel="noopener noreferrer"><img src={Gdsc} alt="club-logo" className={css(styles.clubLogo)} /></a>
					</div>
					<div className={css(styles.clubCard)}>
						<img src={Sae} alt="" className={css(styles.clubLogo)} />
					</div>
					<div className={css(styles.clubCard)}>
						<a href="https://www.agora.io/en/blog/how-to-get-started-with-agora/" target='_blank' rel="noopener noreferrer"><img src={Agora} alt="club-logo" className={css(styles.clubLogo1)} /></a>
					</div>
					<div className={css(styles.clubCard)}>
						<img src={Horizon} alt="" className={css(styles.clubLogo)} />
					</div>
				</div>
			</div>
		</div>
	);
};

const styles = StyleSheet.create({
	root: {
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
		columnGap: 30,
	},
	mainCard: {
		width: "64%",
		height: "100%",
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
		marginTop: 100,
	},
	mainCardTitle: {
		marginTop: 39,
		fontSize: 90,
		fontWeight: "bold",
		lineHeight: "58px",
		color: COLORS.primary,
	},
	mainCardDesc: {
		marginTop: 17,
		fontSize: 43,
		fontWeight: "bold",
		lineHeight: "58px",
		color: COLORS.primary,
	},
	icon: {
		marginTop: 60,
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
		':hover': {
			color: COLORS.tertiary,
		},
		height: 23,
		width: 30,
		color: COLORS.primary,
		paddingRight: 7,
		cursor: "pointer",
	},
	clubCards: {
		width: "36%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		rowGap: 44,
		columnGap: 35,
	},
	clubCard: {
		':hover': {
			opacity: "0.6",
		},
		width: "100%",
		height: "100%",
		background: COLORS.primary,
		borderRadius: 14,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	clubLogo: {
		maxWidth: 120,
		maxHeight: 120,
	},
	clubLogo1: {
		maxWidth: 120,
		maxHeight: 120,
		paddingTop: "20px",
	},
});

export default Main;
