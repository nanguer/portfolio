import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default ({ style }) => {
	const socialIcons = [
		{
			Icon: FaInstagram,
			name: "instagram",
			link: "https://www.instagram.com/mescalitobcn/"
		},
		{
			Icon: FaLinkedinIn,
			name: "linkedIn",
			link:
				"https://www.linkedin.com/in/nahuel-nicolas-gimenez-plotegher-a467b028/"
		},
		{ Icon: FaGithub, name: "github", link: "https://github.com/nanguer" }
	];

	return (
		<>
			{socialIcons.map(({ Icon, name, link }) => (
				<div
					key={name}
					className="pr-2"
					style={{ zIndex: "2", cursor: "pointer" }}
				>
					<a target="_blank" rel="noopener noreferrer" href={link}>
						<Icon key={name} size="1.5em" style={style} />
					</a>{" "}
				</div>
			))}
		</>
	);
};