import React from "react";
import Home from "./pages/desktop/Home";
import Event from "./pages/desktop/Event";
import Team from "./pages/desktop/Team";
import About from "./pages/desktop/About";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import useDeviceType from "./hooks/deviceType";
import "./arrow.css"


function App() {
	const deviceType = useDeviceType();
	if (deviceType === "mobile") {
		return (
			<BrowserRouter>
				<div className="App">
					<h1>Under Maintenance. View in Desktop</h1>
				</div>
				<div className="join">
					<h2>JOIN OUR DISCORD SERVER</h2>
				</div>
				<div className="gform">
					<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScIGpijZxKGkPAJ4SWOT6cWqc1Hber5H5do_irRvdgcRyMMEg/viewform?embedded=true" scrolling="no" width="750" height="1782"  title="CUSAT Club" frameborder="0" marginheight="0" marginwidth="0" className="form1" >Loading…</iframe>
				</div>
			</BrowserRouter>
		);
	} else {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route path="/" component={Home} id="home" exact></Route>
						<Route path="/about" component={About} id="about"></Route>
						<Route path="/events" component={Event} id="event"></Route>
						<Route path="/team" component={Team} id="team"></Route>
						<Route path="/contact"></Route>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
