import { ADD_ITEM, MOVE_ITEM, REMOVE_ITEM } from "../types";

export const addItem = (obj, category) => ({
    type: ADD_ITEM,
    payload: {obj, category}
})

export const removeItem = (timestamp, category) => ({
    type: REMOVE_ITEM,
    payload: {timestamp, category}
})

export const moveItem = (obj, targetCategory) => ({
    type: MOVE_ITEM,
    payload: {obj, targetCategory}
})