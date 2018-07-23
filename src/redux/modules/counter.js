//define actions definitions (action types)
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';

//hey redux, this is the action I want to perform 
//create 'action creator function'  that says what action is performed
export const incrementCount = () => ({
    type: INCREMENT_COUNT
});


//create an action creator function for decrement count

export const decrementCount = () => ({
    type: DECREMENT_COUNT
})




//create counter
const initialState ={
    count: 0
};


//Next, create a REDUCER, which are usually switch statements. Function takes 2 args: state and action
//use spread operator to make a copy of an original state
export default (state = initialState, action) => {  //this is our counterReducer
    switch(action.type){
        //case for increment count
        case INCREMENT_COUNT :{
                // const stateCopy = {...state}; //create a copy of the state with spread operator to make a function pure
                // const newCount = stateCopy.count +1;
                // return {...stateCopy, count: newCount} //rewrite content of stateCopy

                return{...state, count:state.count +1}  //a shorter version of the above three lines
        }
            //create a case for decrement count
        case DECREMENT_COUNT:{
            const stateCopy = {...state};
            const newCount = stateCopy.count -1;
            return {...stateCopy, count: newCount}
        }
        default:{
            return state; //if action does not match to, return the state.
        }
    }
}








