import React from "react";

function Pokemon({ id, name, type, base_experience }) {
	return (
		<div>
			<h4>{name}</h4>
			<p>Type: {type}</p>
			<p>EXP: {base_experience}</p>
		</div>
	);
}

export default Pokemon;
