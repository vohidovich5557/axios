import axios from "axios";
import React from "react";
import {useForm} from 'react-hook-form';
import { toast } from "react-toastify";




export const Form = ({reFetch}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();

    const submit  = (data) => {
        axios.post("http://localhost:3600/todos", data).then((res) => {
            console.log(res.data);
            toast.success("omadli joylandi");
            reFetch();
            reset();
        })
    }

    return (
        <>
        <form onSubmit={handleSubmit(submit)} className=" flex flex-col items-center justify-center mb-[30px]">
             <input type="text" {...register("title", {required: true})} className="w-[400px] px-[20px] py-[10px] outline-none hover:shadow-md mb-[20px] border-2 border-blue-500/50 rounded-[20px]" />
             <button type="submit" className="w-[170px] rounded-[20px] active:shadow-lg   h-[40px] text-center text-xl text-blue-600 border-2 border-blue-600/50">Submit</button>
        </form>
        </>
    )
};