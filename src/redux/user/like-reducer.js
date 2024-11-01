import { ADD_LIKE } from "./type";

const initialState = {
    totalLikes: 0,
};

export const likeReducer = (state = 0, action) => {
    switch (action.type) {
        case ADD_LIKE:
            return state +1;
        default:
            return state;
    }
};