import * as types from '../actions/ActionTypes';

const inintalState = {
    number: 0,
    dummy: 'dummy',
    dumbObject: {
        a: 0,
        b: 1,
        c: 2,
        d: 3
    }
};

export default function counter(state = inintalState, action) {
    // if(typeof state === 'undefined') return inintalState;

    switch(action.type) {
        case types.INCREAMENT:
            return {
                ...state,
                number: state.number + 1,
                dumbObject: { ...state.dumbObject, b: 0 }
            };
            // spread operators 사용 ( 기존의 값을 유지하면서 number값과 dumbObject의 변화만 덮어 씌움 )

        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1,
            };

        default:
            return state;
    }
}