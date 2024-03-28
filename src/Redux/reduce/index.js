import { combineReducers } from "redux";
import { counterReduces } from "./counter.reducer";


 export const Rootreducer = combineReducers ({
    counter:  counterReduces
})