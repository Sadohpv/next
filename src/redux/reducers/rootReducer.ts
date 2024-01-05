
import {combineReducers} from "redux";
import slotReducer from "./slotReducer";
const rootReducer = combineReducers({
    slot: slotReducer,

});

export default rootReducer;