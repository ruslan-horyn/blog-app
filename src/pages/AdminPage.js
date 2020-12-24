import React from "react";
import { Redirect, Route } from "react-router-dom";
const permition = true;
const AdminPage = () => {
	return (
		<Route
			render={() =>
				permition ? (
					<h3>Panel admina - dzień dobry</h3>
				) : (
					<Redirect to={"/login"} />
				)
			}
		/>
	);
};

export default AdminPage;
