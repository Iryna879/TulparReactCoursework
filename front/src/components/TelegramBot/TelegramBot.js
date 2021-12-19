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
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>First name</label>
			<input
				type="text"
				{...register("name", { required: true, maxLength: 80 })}
			/>

			<label>Email</label>
			<input
				type="text"
				{...register("body", {
					required: true,
					pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				})}
			/>
			<label>Mobile number</label>
			<input
				type="tel"
				{...register("tel", {
					required: true,
					maxLength: 11,
					minLength: 8
				})}
			/>


			<input type="submit" />
		</form>
	);
}


