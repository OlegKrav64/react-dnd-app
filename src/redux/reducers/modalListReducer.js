import { SET_MODAL_VISIBILITY } from "../types"

const initialState = {
    visible: false,
    activeCategory: null
}

export const modalListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL_VISIBILITY:
            return {
                ...state,
                visible: action.payload.value,
                activeCategory: action.payload.type
            }
        default: 
            return state 
    }
}