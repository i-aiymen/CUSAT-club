import React from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../../components/Header";
import Team from "../../components/teamDesktop/TeamCard";
import Footer from "../../components/Footer";

const Event = () => {
	return (
		<div className={css(styles.root)}>
			<Header />
            <Team />
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