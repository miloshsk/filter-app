export const operationList = {
	text: [
		{ value: "containing", label: "Containing" },
		{ value: "exactly matching", label: "Exactly matching" },
		{ value: "begins with", label: "Begins with" },
		{ value: "ends with", label: "Ends with" }
	],
	number: [
		{ value: "equal", label: "Equal" },
		{ value: "greater than", label: "Greater than" },
		{ value: "less than", label: "Less than" }
	]
};
export const fields = {
	text: { value: "text", label: "Text field" },
	number: { value: "number", label: "Number field" }
};
export const selectStyles = {
	control: base => ({
		...base,
		"&:hover": {
			borderColor: "grey"
		}
	})
};
