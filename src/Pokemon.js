import React from "react";

function Pokemon({ id, name, type, base_experience }) {
	return (
		<div className="column is-3 has-background-light">
			<h4 className="title is-4">{name}</h4>
			<div className="card-image ">
				<figure className="image is-128x128 mx-auto">
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
					/>
				</figure>
			</div>
			<div className="card-content">
				<p>Type: {type}</p>
				<p>EXP: {base_experience}</p>
			</div>
		</div>
	);
}

export default Pokemon;
