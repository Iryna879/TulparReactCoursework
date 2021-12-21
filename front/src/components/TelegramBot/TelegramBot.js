
import React, {useState} from "react";
import { useForm } from "react-hook-form";

import "./../../style/telegramBot.css";

export default function TelegramBot() {
	const { register, errors, handleSubmit, reset } = useForm();

const [hide, setHide] = useState(false);
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
			});
		reset({name: "", tel: ""});
	};
	console.log(errors);
//+ hide ? 'hide' : 'show'  onClick={() => setHide(true)}
	return (
		<div className={`container-fluid formFluid ${hide ? 'hide' : 'show'} ` } >
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="button" className="close"  onClick={() => setHide(true)}  />

			<h1>Залиште свої дані</h1>

			<input
				type="text" placeholder="Введіть ім'я та прізвище"
				{...register("name", { required: true, maxLength: 80 })}
			/>


			<input
				type="tel" placeholder="Номер телефону"
				{...register("tel", {
					required: true,
					maxLength: 17,
					minLength: 9,
					pattern: /^\+380\d{9}$/
				})}
			/>


			<input type="submit" />
		</form>
		</div>
	);

}


