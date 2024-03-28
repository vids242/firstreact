import { DICREMENT_COUNTER, INCREMENT_COUNTER } from "../ActionType"

export const increment = () => (dispatch) => {
    dispatch({type: INCREMENT_COUNTER })
}
export const dicrement = () => (dispatch) => {
    dispatch({type: DICREMENT_COUNTER })
}