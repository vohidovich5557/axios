import React from "react";
import {toast} from 'react-toastify';
import { request } from "../../config/request";




export const Card = ({title, id, desc, reFetch}) => {

    const deletTodo = () => {
        request.delete(`/todos/${id}`).then((res) => {
            console.log(res);
            toast.success("ochdi ukam");
            reFetch();
            
        })
    };

    const editTodo = () => {
        request.get(`/todos/${id}`).then((res)=> {
            const newMessage = res.data
            console.log(newMessage);
            newMessage.map((item)=> {
                item.title == prompt("");
            })
        })

    };


    return(
        <>
         <div className="flex items-center w-[500px] justify-evenly border-2 border-blue-600/50 rounded-[30px] px-[30px] py-[10px] mb-[20px]">
         <h2>{title}</h2>
         <div className="flex items-center gap-[10px]">
         <button type="button" onClick={deletTodo} className="w-[100px] px-[40px] py-[10px] border-2 border-pink-500/50 flex items-center justify-center rounded-[30px]">delet</button>
         <button type="button" onClick={editTodo} className="w-[100px] px-[40px] py-[10px] border-2 border-pink-500/50 flex items-center justify-center rounded-[30px]">Edit</button>
         </div>
         </div>
        </>
    )
}