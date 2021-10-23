import React from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../../components/Header";
import Main from "../../components/homeDesktop/Main";
import Footer from "../../components/Footer";

const Event = () => {
	return (
		<div className={css(styles.root)}>
			<Header />
            <Main />
			<Footer />
		</div>
	);
};

const styles = StyleSheet.create({
	root: {
		background: "#191F28",
		color: "white",
		paddingTop: 45,
	},
});

export default Event;