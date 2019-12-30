import React, { useState,useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {edititems} from '../actions'
import { connect } from 'react-redux'
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    borderRadius: '10px',
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '10px',
  },
}));





function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [todo, setTodoVal] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



//   useEffect(() => {
//     setTodoVal(
//         props.items[props.e.id].todo
//         )
//     // console.log("useEffect modal")
// },[])

// componentDidMount(){
//     this.setState(
//        {todo: props.items[props.e.id].todo}
//         )
// }

const getTodo=() => {
    setTodoVal(
        props.items[props.index].todo
        )
    // console.log(props.items[props.index])
}


  return (
    <div>
      <button type="button" onClick={()=>{handleOpen();getTodo()}}>
        Open Modal
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
                <input
                type="text"
                placeholder="todo ..."
                onChange={e => setTodoVal(e.target.value)} 
                value={todo}
                />
                   <button
        onClick={() => {
             props.edititems({id:props.e.id, newTodo:todo})
        }}
      >
        save
      </button>
      <button onClick={handleClose} className="buttonCloseModal">x</button>
        </div>
      </Modal>
    </div>
  );
}
const mapStateToProps = state => {
    return {
      items:state.items
  }
}
const mapDispatchToProps = dispatch => {
    return {

      edititems: payload => dispatch (edititems(payload))
    }
  }
  export default  connect (mapStateToProps, mapDispatchToProps) (SimpleModal)
