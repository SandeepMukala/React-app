import React, { Component } from 'react';

const data =[{"name":"Entertainment", "amount": "100 USD"},{"name":"Travel", "amount": "2000 USD"}];

class ExpenseList extends Component{
    
    constructor(props) {
        super(props);
        this.expense = {name: '', amount: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.addExpense = this.addExpense.bind(this);
      }

    render(){
        
        const expenseItems = data.map((d) => <tr><td>{d.name}</td><td>{d.amount}</td></tr>);
        return[
            <form key="k1" onSubmit={this.addExpense}>
                <label>
                Expense Description:
                  <input type="text" ref={(inp) => this.expense.name=inp}  />
                </label>
                <label>
                Expense Amount:
                  <input type="text" ref={(inp) => this.expense.amount=inp} />
                </label>
                <input type="submit" value="Submit" />
            </form>,
            <table key="k2">
                <tr>
                    <th>Expense Description</th>
                    <th>Expenditure</th>
                </tr>
                {expenseItems}
            </table>
        ];
    }

    addExpense = (params) => {
        console.log(this.expense.name);
        //data.push(this.expense);
    }

    handleChange = (params) =>{
        console.log('value changed!');
    }
}

export default ExpenseList;