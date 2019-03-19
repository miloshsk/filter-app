import React, { Component } from "react";
import "./row.sass";
import Select from "react-select";
import { operationList, fields, selectStyles } from "../data";

class Row extends Component {
	state = {
		type: "text",
		value: "",
		operation: operationList.text[0],
		operationList: operationList.text
	};
	changeOperationList = selectedOption => {
		this.setState(
		 {
			 operationList: operationList[selectedOption.value],
			 operation: operationList[selectedOption.value][0],
			 type: selectedOption.value,
			 value: ""
		 },
		 () => {
			 this.props.changeData(
				this.state.type,
				this.state.operation,
				this.state.value,
				this.props.ind
			 );
		 }
		);
	};
	changeCurrentOption = selectedOption => {
		this.setState(
		 {
			 operation: selectedOption
		 },
		 () => {
			 this.props.changeData(
				this.state.type,
				this.state.operation,
				this.state.value,
				this.props.ind
			 );
		 }
		);
	};
	changeCurrentValue = e => {
		const target = e.target.value;
		const value = this.state.type === "text" ? target : Number(target);
		this.setState(
		 {
			 value
		 },
		 () => {
			 this.props.changeData(
				this.state.type,
				this.state.operation,
				this.state.value,
				this.props.ind
			 );
		 }
		);
	};
	render() {
		const fieldList = Object.values(fields);
		const { data, ind, rows } = this.props;
		return (
		 <div className="filter__row">
			 <Select
				styles={selectStyles}
				className="filter__input"
				onChange={this.changeOperationList}
				defaultValue={fieldList[0]}
				value={fields[data.type]}
				options={fieldList}
			 />
			 <Select
				styles={selectStyles}
				className="filter__input"
				value={data.operation}
				onChange={this.changeCurrentOption}
				options={this.state.operationList}
			 />
			 <input
				className="filter__input filter__input-value"
				onChange={this.changeCurrentValue}
				type={data.type}
				value={data.value}
			 />
			 <button
				type="button"
				onClick={() => {
					this.props.removeData(ind);
				}}
				className={`btn-remove ${rows > 1 ? "btn-active" : null}`}
			 />
		 </div>
		);
	}
}

export default Row;
