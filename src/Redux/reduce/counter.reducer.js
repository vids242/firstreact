import { DICREMENT_COUNTER, INCREMENT_COUNTER } from "../ActionType";

const initialstate = {
    isLoading: false,
    count: 0,
    error: null
}
export const counterReduces = (state = initialstate, action) => {
    // console.log(action);

    switch (action.type) {
        case INCREMENT_COUNTER:

            return {
                count: state.count + 1
            }

        case DICREMENT_COUNTER:

            return {
                count: state.count - 1
            }


        default:
            return state

    }
}