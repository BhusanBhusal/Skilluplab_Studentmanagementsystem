'use client'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { getStudentDetailsByEmail } from "@/services/student.service";
import { useEffect, useState } from "react";
import { resetStudentPassword } from "./action";

const resetPasswordSchema = yup.object(
    {
        id: yup.number(),
        password: yup.string().required('Password is required.'),
        confirmPassword: yup.string().required('Confirm password is required!').oneOf([yup.ref('password'), null], 'Confirm password should match with password!')
    }
)
export default function resetPassword(data) {
    data = data.searchParams;
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(resetPasswordSchema)
    });
    const [studentData, setStudentData] = useState(null)
    useEffect(() => {
        (async () => {
            const response = await getStudentDetailsByEmail(data);
            setStudentData(response)

        })();
    }, [])
    if (studentData != null) {
    const tokenExpiryDate= new Date(studentData.tokenExpiry);
    }
    const onResetPasswordSubmit = async (data) => {
        console.log(data);
        const result = await resetStudentPassword(data);
    }
    return (
        <>
        {studentData && studentData.tokenExpiry < Date.now()}
            <form onSubmit={handleSubmit(onResetPasswordSubmit)} className="max-w-sm">
                {studentData && <p className="text-center">Welcome,<b> {studentData.fullName} </b> Please reset your password.</p>}
                <br></br> {studentData && <input type="hidden" {...register('id')} value={studentData.id} />}
                <div className="">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2" >
                        New Password <span className="text-red-500"> *</span>
                    </label>
                    <input {...register('password')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <span className="text-red-500">{errors.password?.message}</span>
                </div>
                <div className="">
                    <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2" >
                        Confirm Password <span className="text-red-500"> *</span>
                    </label>
                    <input {...register('confirmPassword')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <span className="text-red-500">{errors.confirmPassword?.message}</span>
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
        </>
    )
}