import "./assets/css/app.css";
import React from "react";
import Header from "./parts/Header";
import Home from "./parts/Home";
import About from "./parts/About";
import Resume from "./parts/Resume";
import Projects from "./parts/Projects";
import Contact from "./parts/Contact";
import Footer from "./parts/Footer";
import DesignProject from "./parts/DesignProject";
import useScrollAnchor from "./helpers/hooks/useScrollAnchor";

function App() {
	const [theme, setTheme] = React.useState(false);

	useScrollAnchor();
	return (
		<div className="App">
			<Header theme={theme} setTheme={setTheme} />
			<Home theme={theme} />
			<About theme={theme} />
			<Resume theme={theme} />
			<Projects theme={theme} />
			<DesignProject theme={theme} />
			<Contact theme={theme} />
			<Footer theme={theme} />
		</div>
	);
}

export default App;
