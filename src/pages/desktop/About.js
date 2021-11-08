import React from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../../components/Header";
import AboutCard from "../../components/aboutDesktop/aboutCard";
import Footer from "../../components/Footer";

const About = () => {
	return (
		<div className={css(styles.root)}>
			<Header />
            <AboutCard/>
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

export default About;