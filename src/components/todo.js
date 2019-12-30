import React from "react";
import {additems, inputitems, completeitems, deleteitems} from '../actions'
import SimpleModal from './edit'
import { connect } from 'react-redux'

import "./todo.css";

const Connectedtodo = ({todo, items=[], addItem, inputItem, completeItem, deleteitem}) => {
  let id=Math.random();
    return (
      <div>
        <section class="espaceBleu">
          <h1>To-Do App!</h1>
          <h2>Add New To-Do</h2>

          <input
            type="text"
              value={todo}
            id="toDoText"
          onChange={(e)=>inputItem(e.target.value)}
            placeholder="Enter a new task"
          ></input>
          <button id="buttonAdd" onClick={()=>addItem({
            id, todo, checked:false
          })}>
            Add
          </button>
        </section>
        <section id="resultToDo">
			<h1>Let's get some work done!</h1>
        <ul>
          {items.map((el,i) => (
              <div className="itemsrow">
                <button onClick={()=>completeItem(el.id)}>
                  {el.checked ? "Undo": "Complete"}
                </button> 
                <button onClick={() => deleteitem(el.id)}>Delete</button>
                <li className={el.checked ? "complete" : ""}>{el.todo}</li> 
                <SimpleModal e={el} index={i}/>
              </div>
           
          ))}
        </ul>
        </section>
      </div>
    );

}

const mapStateToProps = state => {
  return {
    items:state.items,
    todo:state.todo,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addItem: payload => dispatch (additems(payload)),
    inputItem: payload => dispatch (inputitems(payload)),
    completeItem: payload => dispatch (completeitems(payload)),
    deleteitem: payload => dispatch (deleteitems(payload))
  }
}
const todo = connect (mapStateToProps, mapDispatchToProps) (Connectedtodo)
export default todo;