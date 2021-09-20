import { SET_IS_LOADED, SET_ITEMS } from '../types'
import { mealsAPI } from '../../api/api'

const setItems = (items) => ({
    type: SET_ITEMS,
    payload: items
})

const setIsLoaded = (value) => ({
    type: SET_IS_LOADED,
    payload: value
})

export const fetchItems = () => {
    return (dispatch) => {
        mealsAPI.getList().then(data => {
            dispatch(setItems(data))
            dispatch(setIsLoaded(true))
        })
    }
} 