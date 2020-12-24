import React from "react";

const Article = ({ title, text, autor }) => {
	const styles = {
		marginBottom: "40px",
	};
	return (
		<article style={styles}>
			<h3 style={{ textTransform: "uppercase", marginBottom: 3 }}>
				{title}
			</h3>
			<span style={{ fontSize: 12, marginBottom: 5 }}>{autor}</span>
			<p>{text}</p>
		</article>
	);
};

export default Article;
