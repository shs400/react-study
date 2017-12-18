// import { INCRENENT, DECREMENT, SET_COLOR } from './ActionTypes';
import * as types from './ActionTypes';

export function increment() {
    return {
        type: types.INCREAMENT
    };
};

export function decrement(){
    return {
        type: types.DECREMENT
    };
};

export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color // color: color = color 동일한 의미
    }
}
