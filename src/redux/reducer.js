//import { combineReducers } from 'redux';
import colorsReducer from './features/colors/colorsSlice'

export default function rootReducer(state = {}, action) {
  // always return a new object for the root state
  return {
    // the value of `state.colors` is whatever the todos reducer returns
    colors: colorsReducer(state.colors, action),
    
  }
}

/* 
  Rules of Reducers

    - They should only calculate the new state value based on the state and action arguments
    - They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
    - They must not do any asynchronous logic or other "side effects"
*/






/* 
const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    filters: filtersReducer
  })

export default rootReducer
*/
