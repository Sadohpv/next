const HOLD_INFOR_USER = "HOLD_INFOR_USER";
const CHANGE_SLOT_LEFT = "CHANGE_SLOT_LEFT ";
const CLOUD_RAIN = "CLOUD_RAIN";
const GOJO = "GOJO";

export { HOLD_INFOR_USER };

export const holdInforUserRedux = (id: number) => {
  return async (dispatch: Function, getState: any) => {
    dispatch({
      type: HOLD_INFOR_USER,
      id,
    });
  };
};
