import { ADD_USER, DELETE_USER, EDIT_USER } from "./type";

const initialState = {
    userList: [],
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                userList: [...state.userList, action.value],
            };
        case DELETE_USER:
            const deleteUser = state.userList.filter((item) => item.id !== action.id)
            return {...state, userList:deleteUser};
            case EDIT_USER:
                return {
                  ...state,
                  userList: state.userList.map((user) => 
                    user.id === action.id ? { ...user, user_name: action.newName } : user
                  ),
                };
        default:
            return state;
    }
};
