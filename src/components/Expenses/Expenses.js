import React, {useState} from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterYearHandler = (filterYear) => {
		setFilteredYear(filterYear);
	};

	const filterYearExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter
				selectedYear={filteredYear}
				onFilterYear={filterYearHandler}
			/>
			<ExpensesChart expenses={filterYearExpenses} />
			<ExpensesList items={filterYearExpenses} />
		</Card>
	);
}

export default Expenses;
