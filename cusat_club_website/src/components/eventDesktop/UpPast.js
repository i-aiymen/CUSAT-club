import { StyleSheet, css } from "aphrodite";
import React, { useState } from "react";
import { COLORS } from "../../styles/Constants";
import Up from "./Up";
import Past from "./Past";

const UpPast = () => {

	const [active, setActive] = useState("up");
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.container)}>
				<div className={css(styles.contents)}>
					<div className={css(styles.firstRow)}>
						<div className={css(styles.titleBox)}>
							<button type="submit" className={css(styles.title)} onClick={() => setActive("up")}>
							UPCOMING EVENTS
							</button>	
						</div>
						<div className={css(styles.titleBox1)}>
							<button type="submit" className={css(styles.title1)} onClick={() => setActive("past")}>
							PAST EVENTS
							</button>
						</div>
					</div>
					<div>
						{active === "up" && <Up />}
						{active === "past" && <Past />}
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
		marginTop: 50,
		justifyContent: "space-between",
		alignItems: "center",
	},
	titleBox: {
		width: "auto",
		height: 58,
		borderRadius: 7, 
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		background: COLORS.tertiary,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: "auto",
		paddingLeft: 15,
		paddingRight: 15,
	},
	titleBox1: {
		width: "auto",
		height: 58,
		 
		
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginRight: "auto",
		
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		lineHeight: "50px",
		color: COLORS.primary,
		cursor: "pointer",
		background: "none",
		border: "none",

	},
	title1: {
		fontSize: 40,
		fontWeight: "bold",
		lineHeight: "50px",
		border: "3px solid #16A596",
		borderRadius: 7,
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 2.5,
		background: "none",
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		cursor: "pointer",
		color: COLORS.tertiary,

	},
	titleIcon: {
		marginRight: 11,
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
});



//   function toggleText1(){

// 	var x = document.getElementById("Myid");
// 		x.style.opacity = 1;
//   }

  

export default UpPast;
