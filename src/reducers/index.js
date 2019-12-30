import {ADD_ITEMS,INPUT_ITEMS,COMPLETE_ITEMS,DELETE_ITEMS,EDIT_ITEMS} from '../actionstype'

const initialState = {
    items: [],
    todo: ""
}
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEMS : 
            return {...state,items:state.items.concat(action.payload)}
        case INPUT_ITEMS : 
            return {...state,todo:action.payload}
        case COMPLETE_ITEMS:
            return {...state,items:state.items.map(e=>(e.id===action.x?{...e,checked:!e.checked}:e))}
        case DELETE_ITEMS:
            return {...state,items:state.items.filter(e=>(e.id!==action.payload))}
        case EDIT_ITEMS:
            return {...state,items:state.items.map(e=>(e.id===action.payload.id?{...e,todo:action.payload.newTodo}:e))}
            // return {...state,items:state.items.map(e=>(e.id===action.id?{...e,todo:action.newTodo}:e))}

        default:
            return state;
    }
}
export default rootReducer;