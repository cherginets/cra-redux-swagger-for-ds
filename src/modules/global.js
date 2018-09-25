export const TMP_COUNT_PLUS = 'TMP_COUNT_PLUS';

const initialState = {
    count: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TMP_COUNT_PLUS:
            return {
                ...state,
                count: state.count + action.value
            };
        default:
            return state;
    }
}
