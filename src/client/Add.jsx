import React, { Component } from "react";
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", amount: 0 };
  }
  handleDescription = (evt) => {
    // console.log(evt.target.value);
    this.setState({ description: evt.target.value });
    // console.log(this.state.description);
  };
  handleAmount = (evt) => {
    const amount = parseInt(evt.target.value);
    // console.log(amount);
    this.setState({ amount: amount });
    // console.log(this.state.amount);
  };
  render = () => {
    return (
      <div>
        <form method='push' id='add' onSubmit={this.handleSubmit}>
          <label>Description</label>
          <input type='text' onChange={this.handleDescription} />
          <label>Amount</label>
          <input type='number' onChange={this.handleAmount} />
          <input type='submit' />
        </form>
        <select form='add' id='options'>
          <option value='Salary'>Salary</option>
          <option value='Food'>Food</option>
          <option value='Transport'>Transport</option>
          <option value='House'>House</option>
          <option value='Other'>Other</option>
        </select>
        <select form='add' id='type'>
          <option value='Income'>Income</option>
          <option value='Expense'>Expense</option>
        </select>
      </div>
    );
  };
}

export default Add;
