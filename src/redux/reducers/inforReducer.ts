import { type } from "os";
import { HOLD_INFOR_USER } from "../actions/inforAction";

const INITIAL_STATE: { hold_infor: number[] } = {
  hold_infor: [],
};

interface Action {
  type: string;
  id: number;
}

const slotReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case HOLD_INFOR_USER:
      // let temp = state.hold_infor.push(action.id);
      //   let temp = state.hold_infor.push(1);
      if (!state.hold_infor.includes(action.id)) {
        return {
          ...state,
          hold_infor: [...state.hold_infor, action.id],
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default slotReducer;
