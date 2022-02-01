export const initialState = null;

export const reducer = (state, action) => {
    if (action.type === 'USER') {
        return action.payload;
    }
    return state;
}

export const userTypeReducer = (state, action) => {
    if (action.type === 'USERTYPE') {
        return action.payload;
    }
    return state;
}
