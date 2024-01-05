import { type } from "os";
import { CHANGE_SLOT_LEFT, CHANGE_SLOT_RIGHT } from "../actions/slotAction";

const INITIAL_STATE = {
  slot_left: 1,
  slot_right: 2,
};

interface Action {
  type: string;
  slot: number;
}

const slotReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case CHANGE_SLOT_RIGHT:
      return {
        ...state,
        slot_right: action.slot,
      };
    case CHANGE_SLOT_LEFT:
      return {
        ...state,
        slot_left: action.slot,
      };
    default:
      return state;
  }
};

export default slotReducer;
