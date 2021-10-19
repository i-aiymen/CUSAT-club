import React from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../../components/Header";
import Main from "../../components/homeDesktop/Main";
import Vision from "../../components/homeDesktop/Vision";
import UpEvents from "../../components/homeDesktop/UpEvents";
import InfoCard from "../../components/homeDesktop/InfoCard";
import MailList from "../../components/homeDesktop/MailList";

const Home = () => {
	return (
		<div className={css(styles.root)}>
			<Header />
			<Main />
			<Vision />
			<UpEvents />
			<InfoCard />
			<MailList />
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

export default Home;
