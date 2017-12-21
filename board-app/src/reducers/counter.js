import * as types from '../action/ActionType';
import DataList from '../userData.json';
const inintalState = {
    total: DataList.UserData.length
};

export default function counter(state = inintalState, action) { // (이전상태값, 액션)
    // if(typeof state === 'undefined') return inintalState;
    switch(action.type) {
        case types.TOTALCHANGE:
            return { total: state.total}
    }

    return state;
}