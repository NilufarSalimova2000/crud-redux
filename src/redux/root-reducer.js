import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer";
import { likeReducer } from "./user/like-reducer";

export const rootReducer = combineReducers({
    usersList: userReducer,
    likes: likeReducer,
})
