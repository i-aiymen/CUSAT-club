import { StyleSheet, css } from "aphrodite";
import React from "react";
import { COLORS } from "../../styles/Constants";

const MailList = () => {
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.container)}>
				<div className={css(styles.titleBox)}>
					<img src="" alt="icn" className={css(styles.titleIcon)} />
					<span className={css(styles.title)}>JOIN OUR MAILING LIST</span>
				</div>
				<div className={css(styles.description)}>
					Get weekly access to our webinars, career tips and more...
				</div>
				<div className={css(styles.formContainer)}>
					<form className={css(styles.form)}>
						<input
							type="text"
							placeholder="Name"
							className={css(styles.inputFields)}
						/>
						<input
							type="text"
							placeholder="Year of study"
							className={css(styles.inputFields)}
						/>
						<input
							type="text"
							placeholder="Branch"
							className={css(styles.inputFields)}
						/>
						<input
							type="email"
							placeholder="Email ID"
							className={css(styles.inputFields)}
						/>
						<input
							type="submit"
							placeholder="JOIN"
							className={css(styles.inputButton)}
						/>
						<div className={css(styles.joined)}>
							<span>You have joined</span>
							<img src="" alt="tick" />
						</div>
					</form>
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
		borderRadius: 20,
		padding: "50px 35px 50px 35px",
		display: "flex",
		flexDirection: "column",
		color: COLORS.tertiary,
	},
	titleBox: {
		maxWidth: 520,
		height: 58,
		borderRadius: 7,
		background: COLORS.tertiary,
		display: "flex",
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
	form: {
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		rowGap: 59,
		columnGap: 72,
	},
});

export default MailList;
