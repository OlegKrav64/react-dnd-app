import { ADD_ITEM, REMOVE_ITEM } from '../types'

const initialState = {
    breakfast: [],
    morningSnack: [],
    lunch: [],
    afternoonSnack: [],
    dinner: []
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: 
            return {
                ...state,
                [action.payload.category]: [...state[action.payload.category], action.payload.obj]
            }
        case REMOVE_ITEM: 
            return {
                ...state,
                [action.payload.category]: [...state[action.payload.category].filter(item => {
                    return (item.timestamp !== action.payload.timestamp)
                })]
            }
        default:
            return state
    }
}