import { SET_MODAL_VISIBILITY } from "../types";

export const setModalListVisibility = (value, type) => ({
    type: SET_MODAL_VISIBILITY,
    payload: {value, type}
})