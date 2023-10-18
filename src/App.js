import React from "react";
import "./style.css"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import List from "./Components/List";
import Title from "./Components/Title";

export default function App() {
	const [darkMode, setDarkMode] = React.useState(false);

	function toggleDarkMode() {
		setDarkMode(!darkMode);
	}

	return (
		<div>
			<Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<main className={darkMode ? "dark" : ""}>
				<Title darkMode={darkMode} />
				<List darkMode={darkMode} />
			</main>
			<Footer darkMode={darkMode} />
		</div>
	);
}