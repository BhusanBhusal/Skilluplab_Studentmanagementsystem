'use client'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { data } from "autoprefixer";
import { forgetPassword } from "./action";

const forgotPasswordSSchema = yup.object({
    email: yup.string().required("Email is required.").email('Please provide a valid email address.')
})

export default function forgetStudentPassword() {


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(forgotPasswordSSchema)
    });

    const onResetPasswordSubmit = async (data) => {
        await forgetPassword(data);
    }
    return (
        <>
            <div className="">
                <form id="Login" onSubmit={handleSubmit(onResetPasswordSubmit)} className="w-full  max-w-sm">
                    <div className="text-center">
                        <h3>Forgot your Password ?</h3>
                        <span>No Worries, We will send reset Instruction.</span>
                    </div>
                    <div className="mb-4 ml-10 mt-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Email <span className="text-red-500"> *</span>
                        </label>
                        <input {...register('email', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your Email" />
                        <span className="text-red-500">{errors.email?.message} </span>
                    </div>
                    <div className="mb-4 text-right text-blue-500 ml-16">

                    </div>
                    <div className="md:flex md:items-center">
                        <div className="ml-16 md:w-2/3">
                            <button type="submit" className="shadow  text-black font-bold py-2 px-4 rounded-full bg-golden" >
                                Reset Password
                            </button>
                            <Link href="./login" className=" ml-1 shadow focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded-full bg-golden" type="button">
                                Cancel
                            </Link>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}