import React from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../../components/Header";
import TimeLine from "../../components/eventDesktop/timeLine";
import UpPast from "../../components/eventDesktop/UpPast";
import Footer from "../../components/Footer";



// import Main from "../../components/homeDesktop/Main";
// import Vision from "../../components/homeDesktop/Vision";

// import InfoCard from "../../components/homeDesktop/InfoCard";
// import MailList from "../../components/homeDesktop/MailList";



const Event = () => {
	return (
		<div className={css(styles.root)}>
			<Header />
            <TimeLine />
            <UpPast />
			{/* <Main /> */}
			{/* <Vision />
			
			<InfoCard />
			<MailList /> */}
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