import React from "react";
import Home from "./pages/desktop/Home";
import Event from "./pages/desktop/Event";
import Team from "./pages/desktop/Team";
import About from "./pages/desktop/About";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import useDeviceType from "./hooks/deviceType";


function App() {
	const deviceType = useDeviceType();
	if (deviceType === "mobile") {
		return (
			<BrowserRouter>
				<div className="App">
					<h1>Mob view</h1>
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
