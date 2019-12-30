import {ADD_ITEMS,INPUT_ITEMS,DELETE_ITEMS,COMPLETE_ITEMS,EDIT_ITEMS} from '../actionstype'
export const additems = (payload) => {
    return {
        type:ADD_ITEMS, payload
    }
}
export const inputitems = (payload) => {
    return {
        type:INPUT_ITEMS, payload
    } 
}
export const deleteitems = (payload) => {
    return {
        type:DELETE_ITEMS, payload
    }
}
export const completeitems = (x) => {
    return {
        type:COMPLETE_ITEMS, x
    }
}
// export const edititems = (id,newTodo) => {
//     return {
//         type:EDIT_ITEMS, id, newTodo
//     }
// }

export const edititems = (payload) => {
    return {
        type:EDIT_ITEMS, payload
    }
}