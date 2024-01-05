const CHANGE_SLOT_RIGHT = "CHANGE_SLOT_RIGHT";
const CHANGE_SLOT_LEFT = "CHANGE_SLOT_LEFT ";
const CLOUD_RAIN = "CLOUD_RAIN";
const GOJO = "GOJO";


export {CHANGE_SLOT_RIGHT,CHANGE_SLOT_LEFT,CLOUD_RAIN,GOJO}

export const changeSlotRightRedux = (slot) => {

	return async (dispatch, getState) => {
		dispatch({
			type: CHANGE_SLOT_RIGHT,
			slot,
		});
	};
};
export const changeSlotLeftRedux = (slot) => {

	return async (dispatch, getState) => {
		dispatch({
			type: CHANGE_SLOT_LEFT,
			slot,
		});
	};
};