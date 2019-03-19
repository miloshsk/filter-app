import React, { Component } from "react";
import Row from "../Row/Row";
import "./form.sass";
import { operationList } from "../data";

class Form extends Component {
	state = {
		data: [{ type: "text", operation: operationList.text[0], value: "" }]
	};
	addRow = () => {
		if (this.state.data.length > 9) {
			return;
		}
		const newDataItem = {
			type: "text",
			operation: operationList.text[0],
			value: ""
		};
		this.setState({
			data: [...this.state.data, newDataItem]
		});
	};
	apply = e => {
		e.preventDefault();
		let output = { text: [], number: [] };
		for (let i of this.state.data) {
			const obj = { operation: i.operation.value, value: i.value };
			output[i.type].push(obj);
		}
		console.log(output);
	};
	changeData = (type, operation, value, ind) => {
		const copy = this.state.data.slice();
		copy[ind] = { type, operation, value };
		this.setState({
			data: copy
		});
	};
	removeData = ind => {
		const arr = [...this.state.data];
		arr.splice(ind, 1);
		this.setState({
			data: arr
		});
	};
	clearData = () => {
		this.setState({
			data: [{ type: "text", operation: operationList.text[0], value: "" }]
		});
	};
	render() {
		return (
		 <form className="filter" onSubmit={this.apply}>
			 <div className="filter__rows">
				 {this.state.data.map((item, ind) => {
					 return (
						<Row
						 key={ind}
						 ind={ind}
						 data={this.state.data[ind]}
						 changeData={this.changeData}
						 removeData={this.removeData}
						 rows={this.state.data.length}
						/>
					 );
				 })}
				 <button className="btn-add" type="button" onClick={this.addRow}>
					 Add condition
				 </button>
			 </div>
			 <button className="btn btn-apply" type="submit">
				 Apply
			 </button>
			 <button
				className="btn btn-clear"
				onClick={this.clearData}
				type="button"
			 >
				 Clear filter
			 </button>
		 </form>
		);
	}
}

export default Form;
