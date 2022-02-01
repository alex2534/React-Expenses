import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "../../css/ExpenseItem.css";

const ExpenseItem = (props) => {
	const onCllickHandler = () => {
		console.log("update");
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2 type="text">{props.title}</h2>
				<div className="expense-item__price" type="number">
					${props.amount}
				</div>
			</div>

			<button onClick={onCllickHandler}>Change</button>
		</Card>
	);
};

export default ExpenseItem;
