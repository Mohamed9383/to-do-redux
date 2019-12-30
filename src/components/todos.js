import React, { Component } from "react";
import "./todo.css";
export default class todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      todo: ""
    };
  }
addItem = () => {
if(this.state.value!==""){
    this.setState({
        items:this.state.items.concat({
            todo:this.state.todo,
            checked:false
        }),
        todo:""
    })
}
}
isComplete = (x) => {
    this.setState({
        items:this.state.items.map((el,index)=>index===x ? {...el, checked:!el.checked}:el)
    })
}
isDelete = (y) => {
    this.setState({
        items:this.state.items.filter((el,index)=> index!==y)
    })
}
  handleChange = e => this.setState({ todo: e.target.value });
  render() {
    return (
      <div>
        <section class="espaceBleu">
          <h1>To-Do App!</h1>
          <h2>Add New To-Do</h2>
          <input
            type="text"
            id="toDoText"
            value={this.state.todo}
            onChange={this.handleChange}
            placeholder="Enter a new task"
          ></input>
          <button id="buttonAdd" onClick={this.addItem}>Add</button>
        </section>
        {this.state.items.map((el,i)=>(
           <div>
           <button onClick={()=>this.isComplete(i)}>
               {el.checked? "Undo" : "Complete"}
               </button> 
           <li className={el.checked ? "complete" : "undo"}>{el.todo}</li>
           <button onClick={()=>this.isDelete(i)}>Delete</button>
       </div>
       ))}
      </div>
      
    );
  }
}
