"use client"
import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { studentLogin } from "./action";
import { useEffect } from "react";

const loginFormSchema = yup.object(
    {
        email: yup.string().required('Email is required.').email('Please provide a valid email.'),
        password: yup.string().required('Password is required.')
    }
)
export default function Home() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginFormSchema)
    });

    const onPasswordSubmit = async (data) => {
          await studentLogin(data);
          
    }

    // const onPasswordSubmit =async (data)=>{
    //     console.log(data);

    // }

    return (
        <>
            <form onSubmit={handleSubmit(onPasswordSubmit)} className="max-w-sm">
                <div className="mb-4 ">
                    <label htmlFor="Email" className="block text-gray-700 text-sm font-bold mb-2" >
                        Email <span className="text-red-500"> *</span>
                    </label>
                    <input {...register('email')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your Email" />
                    <span className="text-red-500">{errors.email?.message}</span>

                </div>
                <div className="">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2" >
                        Password <span className="text-red-500"> *</span>
                    </label>
                    <input {...register('password')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <span className="text-red-500">{errors.password?.message}</span>
                </div>
                <div className="mb-4 text-right text-blue-500 ">
                    <Link className="" href="./forgetpassword"><u>Forgot your Password?</u></Link>
                </div>
                <div className="ml-24 md:items-center">
                    <div className="md:w-2/3">
                        <button type="submit" className="shadow text-black font-bold py-2 px-4 rounded-full bg-golden" >
                            Log in
                        </button>
                        <Link href="/auth/login" className=" ml-1 shadow focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded-full" type="button">
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </>
    )
}