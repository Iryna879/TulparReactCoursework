/*
import React from "react";

export default class TelegramBot extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			error: null,
			isLoaded: true,
			message: {
				body: "",
				name: "",
				tel: ""
			}
		}
	}

	onChange(el) {
		// тут формируется оперативная реакция системы на ввод пользователя
		const message = this.state.message;
		message[el.target.name] = el.target.value;
		this.setState({ message: message });
	}

	send() {
		this.setState({ isLoaded: false })
		fetch("/api/sendTelegram/",
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(this.state.message)
			}
		)
			.then(res => {
				console.log("Result:", res);
				return res.json();
			})
			.then(data => {
				console.log(data);
				this.setState({ isLoaded: true })
			})
			.catch(err => {
				this.setState({ error: err, isLoaded: true })
			})
	}

	render() {
		if (this.state.error) return this.renderError();
		if (!this.state.isLoaded) return this.renderLoading();
		return this.renderData();
	}

	renderData() {
		return (
			<div className="row" >
				<h3>Telegram Bot</h3>
				<input type="text" name="name" onChange={this.onChange.bind(this)} placeholder="Name" /><br />
				<input type="text" name="tel" onChange={this.onChange.bind(this)} placeholder="Tel" /><br />
				<input type="text" name="body" onChange={this.onChange.bind(this)} placeholder="Message" /><br />
				<input type="button" onClick={this.send.bind(this)} value="Send" />
			</div>
		);
	}

	renderLoading() {
		return (
			<div className="d-flex justify-content-center">
				<div className="spinner-border" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		)
	}

	renderError() {
		return (
			<div className="alert alert-danger" role="alert">
				Error: {this.state.error.message}
			</div>
		);
	}
}*/

import React from "react";
import { useForm } from "react-hook-form";

import "./../../style/telegramBot.css";

export default function TelegramBot() {
	const { register, errors, handleSubmit } = useForm();
	const onSubmit = (data) => {
		//alert(JSON.stringify(data));
		fetch("/api/sendTelegram/",
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			}
		)
			.then(res => {
				console.log("Result:", res);
				return res.json();
			})
			.then(data => {
				console.log(data);
			})
			.catch(err => {
				console.log(err);
			})
	};
	console.log(errors);

	return (
		<div>
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>Залиште свої дані</h1>

			<input
				type="text" placeholder="Введіть ім'я та прізвище"
				{...register("name", { required: true, maxLength: 80 })}
			/>


			<input
				type="tel" placeholder="Номер телефону"
				{...register("tel", {
					required: true,
					maxLength: 15,
					minLength: 9,
					pattern: /[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}$/
				})}
			/>


			<input type="submit" />
		</form>
		</div>
	);
}


