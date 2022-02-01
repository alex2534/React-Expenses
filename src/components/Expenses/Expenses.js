import React, { useState } from "react";

import "../../css/Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			<ExpenseFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpenseList items={filteredExpenses} />

			{filteredExpenses.length == 0 && <p>No expenses found.</p>}
			{filteredExpenses.length > 0 &&
				props.items.map((expenses) => (
					<ExpenseItem
						key={expenses.id}
						title={expenses.title}
						amount={expenses.amount}
						date={expenses.date}
					/>
				))}
		</Card>
	);
};

export default Expenses;
