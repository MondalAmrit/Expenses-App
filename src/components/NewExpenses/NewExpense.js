import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			id: Math.random().toString(),
			...enteredExpenseData,
		};
		props.onAddExpense(expenseData);
		setIsAdding(false);
	};

	const [isAdding, setIsAdding] = useState(false);

	const startAddingHandler = () => {
		setIsAdding(true);
	};

	const stopEditingHandler = () => {
		setIsAdding(false);
	};

	return (
		<div className="new-expense">
			{!isAdding && (
				<button onClick={startAddingHandler}>Add New Expense</button>
			)}
			{isAdding && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
