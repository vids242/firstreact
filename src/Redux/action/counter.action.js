import { INCREMENT_COUNTER } from "../ActionType"

export const increment = () => (dispatch) => {
    dispatch({type: INCREMENT_COUNTER })
}