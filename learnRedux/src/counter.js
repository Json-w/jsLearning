//var expect = require("expect");
import expect,{ createSpy,spyOn,isSpy} from 'expect'
import {createStore} from 'redux'
const counter = (state = 0, action) => {
    if (typeof state === 'undefined') {
        return 0;
    }

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}


const store = createStore(counter);
console.log(store.getState());
store.dispatch({type:'INCREMENT'});
console.log(store.getState());
expect(
    counter(0, {type: "INCREMENT"})
).toEqual(1);

expect(counter(1, {type: "INCREMENT"})).toEqual(2);

expect(counter(2, {type: "DECREMENT"})).toEqual(1);

expect(counter(1, {type: "DECREMENT"})).toEqual(0);

expect(counter(1, {type: 'SOMETHING_ELSE'})).toEqual(1);

expect(counter(undefined, {})).toEqual(0);

console.log('Test complected!!');