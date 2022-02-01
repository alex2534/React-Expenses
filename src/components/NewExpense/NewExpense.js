import React from "react";

import ExpenseForm from "./ExpenseForm";
import "../../css/NewExpense.css";

const NewExpense = (props) => {
	const onSaveExpenseData = (enteredExpenseData) => {
		const expeenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		//Receiveing props  from App.js como uma function e passando o valor de expenseData para App.js
		props.onAddExpense(expeenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={onSaveExpenseData} />
		</div>
	);
};

export default NewExpense;
