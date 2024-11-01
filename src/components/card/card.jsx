import React from "react";
import { ADD_LIKE, DELETE_USER, EDIT_USER } from "../../redux/user/type";
import { useDispatch } from "react-redux";
import { LikeIcon } from "../../assets/like-icon";

export const Card = ({ id, title }) => {
    const dispatch = useDispatch();
    const deleteItem = (id) => {
        dispatch({ type: DELETE_USER, id })
    }

    const editItem = (id) => {
        const newName = prompt("Edit name");
        if (newName) {
            dispatch({ type: EDIT_USER, id, newName })
        }

    }

    const likeItem = (id) => {
        dispatch({ type: ADD_LIKE });
    };

    return (
        <div className="w-[400px] rounded border border-[2px] border-pink-300 p-[20px] mb-[20px]">
            <h1 className="text-center mb-[20px] font-semibold text-pink-300 text-[25px]">{title}</h1>
            <div className="flex justify-center gap-[15px]">
                <button className="add_btn rounded bg-pink-300 text-[#fff] px-[15px] py-[11px]" onClick={() => { deleteItem(id) }}>delete</button>
                <button className="add_btn rounded bg-pink-300 text-[#fff] px-[15px] py-[11px]" onClick={() => { editItem(id) }}>edit</button>
                <button onClick={(e) => likeItem(e)}><LikeIcon /></button>
            </div>
        </div>
    )
}