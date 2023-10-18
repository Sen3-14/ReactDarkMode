import React from "react";

const year = new Date().getFullYear();

export default function Footer(props) {
	return (
		<footer>
			<small className={props.darkMode ? "" : "darkText"}>
				<a
					href="https://github.com/Sen3-14"
					style={{ textDecoration: "none" }}
				>
				{" "}
				© {year} by{" "}
					miyagi
				
                    <img className="gitImg"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github icon" />
            
                </a>
			</small>    
		</footer>
	);
}