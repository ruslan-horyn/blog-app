import React, { Component } from "react";
import { Prompt } from "react-router-dom";

import "../styles/ContactPage.css";

class ContactPage extends Component {
	state = {
		value: "",
	};

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ value: "" });
	};
	render() {
		return (
			<div className='contact'>
				<form onSubmit={this.handleSubmit}>
					<h3 className="contact__messege">Napisz do nas</h3>
					<textarea
						className='contact__text'
						placeholder='Wpisz wiadomość'
						onChange={this.handleChange}
						value={this.state.value}></textarea>
					<button className="contact__button">Wyślij</button>
				</form>
				<Prompt 
					when={this.state.value}
					message="Masz niewypiełniony formularz. Czy napewno chcesz opuścić tę strone?"
				/>
			</div>
		);
	}
}

export default ContactPage;
