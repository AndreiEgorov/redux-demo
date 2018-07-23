//define action type

const UPDATE_COUNT_NAME = 'UPDATE_COUNT_NAME';

//create action creator

export const updateCountName = (value)=> ({
    type: UPDATE_COUNT_NAME,
    payload: value  //payload is whatever argument you will pass. Its a Key for the value.
});

//reducer

export default(state ={userInput:null}, action) => {
    switch(action.type){
        case UPDATE_COUNT_NAME:{
            return {...state, userInput: action.payload} //userInput is same as value
        }
        default:{
           return {state};
        }
    }
}