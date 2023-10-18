import React from "react";


export default function Title(props) {
	return <h1 className={
		props.darkMode ? "title" : "darkText title"
	}>Fun facts about React</h1>;
}