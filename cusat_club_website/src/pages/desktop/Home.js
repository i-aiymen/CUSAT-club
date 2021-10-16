import React from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../../components/Header";
import Main from "../../components/homeDesktop/Main";

const Home = () => {
	return (
		<div className={css(styles.root)}>
			<Header />
			<Main />
		</div>
	);
};

const styles = StyleSheet.create({
	root: {
		background: "#191F28",
		color: "white",
		paddingTop: 65,
	},
});

export default Home;
