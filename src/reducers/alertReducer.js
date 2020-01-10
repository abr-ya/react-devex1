import {SHOW_ALERT, HIDE_ALERT} from '../actions/actionTypes';

const initialState = {
    display: false,
    type: '',
    text: '',
}

export default function alertReducer(state = initialState, action) {
    switch(action.type) {
        case SHOW_ALERT:
            return {
                display: true,
                type: action.payload.type,
                text: action.payload.text,
            }
        case HIDE_ALERT:
            return {
                display: false,
                type: '',
                text: '',
            }
        default:
            return state;
    }
}