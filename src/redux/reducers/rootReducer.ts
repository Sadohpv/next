
import {combineReducers} from "redux";
import slotReducer from "./slotReducer";
import inforReducer from "./inforReducer"
const rootReducer = combineReducers({
    slot: slotReducer,
    infor : inforReducer
});

export default rootReducer;