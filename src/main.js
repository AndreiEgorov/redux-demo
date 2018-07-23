import store from './redux/store';
import counter, { incrementCount, decrementCount } from './redux/modules/counter';
import {updateCountName} from './redux/modules/name'

const unsubscribe = store.subscribe(()=>console.log(store.getState()));//To see each consecutive change made to the store, to end it use unsubscribe()

// console.log(store.getState())//should return a current state of our app., which is 0
console.log(store.dispatch(incrementCount()))//dispatch an action for incrementing
console.log(store.dispatch(incrementCount()))//dispatch increment second time, kind of for every click
// console.log(store.getState()) //see new state that was aletered
console.log(store.dispatch(decrementCount()))
store.dispatch(updateCountName('A spaceship'));

unsubscribe();


const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const count = document.getElementById("count");

incrementButton.addEventListener("click", () => {
   store.dispatch(incrementCount())
   const newValue = store.getState().counter.count
    count.innerHTML=`${newValue}`
  });

  decrementButton.addEventListener("click", () => {
    store.dispatch(decrementCount())
    const newValue = store.getState().counter.count
     count.innerHTML=`${newValue}`
   });



const nameInput = document.getElementById("name");
const countedName = document.getElementById("counted-name");
nameInput.addEventListener("input", event => {
    store.dispatch(updateCountName(nameInput.value))
    const newInput = store.getState().name.userInput
    countedName.innerHTML=`${newInput}`
});