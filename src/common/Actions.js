import {TMP_COUNT_PLUS} from "../modules/global";

export function tmp_count_plus() {
    return (dispatch, getStore) => {
        dispatch({
            type: TMP_COUNT_PLUS,
            value: 1,
        });
    }
}