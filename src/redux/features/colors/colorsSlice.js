const initialState = {
    //pueden haber varios key: value acá, son todos los valores iniciales

  }
  
  // Use the initialState as a default value
  function colorsReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }


  export default colorsReducer;


/* 
  Rules of Reducers

    - They should only calculate the new state value based on the state and action arguments
    - They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
    - They must not do any asynchronous logic or other "side effects"
*/