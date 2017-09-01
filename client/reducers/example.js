import {
    EXAMPLE
} from "../actions/index"

const initialState = {
    text: 'Example'
}

export default function example(state = initialState, action) {
    switch (action.type) {
        case EXAMPLE:
            return { ...state, text: action.text }
        default:
            return state
    }
}