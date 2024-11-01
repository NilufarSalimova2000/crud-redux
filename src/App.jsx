import { useDispatch, useSelector } from "react-redux";
import { ADD_USER } from "./redux/user/type";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Card } from "./components/card/card";
import { LikeIcon } from "./assets/like-icon";


function App() {
  const { register, handleSubmit, reset } = useForm();
  const userList = useSelector((state) => state.usersList);
  const totalLikes = useSelector((state) => state.likes);
  console.log(userList);
  const dispatch = useDispatch();
  const submit = (data) => {
    dispatch({ type: ADD_USER, value: { ...data, id: nanoid() } });
    reset();
  };


  return (
    <div className="container">
      <div className="py-[50px] flex justify-between">
        <form className="form flex gap-[15px]" onSubmit={handleSubmit(submit)}>
          <input {...register("user_name")} type="text" placeholder="Add a todo"
            className="todo_input w-[400px] border border-[2px] border-pink-300 rounded p-[10px] outline-pink-400" />
          <button className="add_btn rounded bg-pink-300 text-[#fff] px-[15px] py-[11px]" type="submit">Add</button>
        </form>
        <div className="flex relative">
        <LikeIcon />
        <h1 className="w-[20px] h-[20px] rounded-[50%] bg-pink-300 text-[#fff] flex justify-center items-center absolute top-[-10px] left-[18px]">{totalLikes}</h1>
        </div>
        
      </div>
      <div >
        {userList?.userList.map((item) => (
          <Card key={item.id} id={item.id} title={item.user_name} />
        ))}
      </div>

    </div>
  );
}

export default App;
