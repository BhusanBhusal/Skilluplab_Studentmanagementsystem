'use client'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import enrollmentvalidationSchema from './validationSchema';
import { registerNewStudent } from '@/app/auth/register/action';
import { useState } from "react";
import SuccessMessage from "@/components/successMessage";
import Link from "next/link";



export default function Home() {
  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(enrollmentvalidationSchema),
  });

  const onEnrollmentSubmit = async (data) => {
    console.log(data);
    await registerNewStudent(data);
    
  }
  const StudentSubmit=async()=>{

  }
  console.log(errors);
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onEnrollmentSubmit)} >
    
      <div className="">
        <div className="border-b pb-6 border-gray-900/10 mt-6 mb-3">
          <h2 className="text-base font-semibold text-gray-900">Personal Information</h2>
          <div className=" grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name <span className="text-red-500"> *</span>
              </label>
              <div className="mt-2">
                <input
                  {...register('fullName')}
                  type="text"

                  id="fullName"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span className="text-red-500">{errors.fullName?.message}</span>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email <span className="text-red-500"> *</span></label>
              <div className="mt-2">
                <input {...register('email')}
                  type="text"

                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
              <span className="text-red-500">{errors.email?.message}</span>
            </div>
          </div>
          <div className=" grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-6 mt-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">Mobile <span className="text-red-500"> *</span></label>
              <div className="mt-2">
                <input {...register('mobile')}
                  id="mobile"
                  type="text"
                  autoComplete="mobile"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
              <span className="text-red-500">{errors.mobile?.message}</span>
            </div>
            <div className="sm:col-span-6">
              <label className="block text-sm font-medium leading-6 text-gray-900">Residental Address <span className="text-red-500"> *</span></label>
              <div className="mt-2">
                <input {...register('residentalAddress')}
                  id="residentaladdress"
                  type="text"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
              <span className="text-red-500">{errors.residentalAddress?.message}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b pb-6">
        <h2 className="text-base font-semibold text-gray-900">Academic  Information</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900">Education<span className="text-red-500"> *</span></label>
            <div className="mt-2">
              <input type="text" {...register('education')} id="education"
                autoComplete="education"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              <span className="text-red-500">{errors.education?.message}</span>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900">College/University <span className="text-red-500"> *</span></label>
            <div className="mt-2">
              <input {...register('college')} type="text" id="college"
                autoComplete="college"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              <span className="text-red-500">{errors.college?.message}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 border-b pb-6">
        <h2 className="text-base font-semibold text-gray-900">Course Information <span className="text-red-500"> *</span></h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
          <div className="sm:col-span-12">
            <label className="block text-sm font-medium leading-6 text-gray-900">Course</label>
            <div className="mt-2">
              <select {...register('course')}
                id="course"
                name="course"
                autoComplete="course"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option value=''>Choose from Course</option>
                <option value="softwareDevelopment">Software Development</option>
                <option value="QA">QA Engineer</option>
                <option value="dataAnalytics">Data Analytics</option>
              </select>
              <span className="text-red-500">{errors.course?.message}</span>
            </div>
          </div>
        </div>
        <div className="grid gap-x-6 mt-3">
          <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block  text-sm font-medium leading-6 text-gray-900">Enrollment Date <span className="text-red-500"> *</span></label>
              <div className="mt-2">
                <input {...register('enrollmentDate')}
                  type="date" id="enrollmentdate"
                  autoComplete="Date"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <span className="text-red-500">{errors.enrollmentDate?.message}</span>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">Session time table <span className="text-red-500"> *</span></label>
              <div className="mt-2">
                <select {...register('sessionTime')}
                  id="classtimetable" autoComplete="course" className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
                  <option value="">Choose from Session</option>
                  <option value="9:00AM">9:00 Am - 1:00 Pm</option>
                  <option value="2:00PM">2:00 Pm - 6:00 Pm</option>
                  <option value="5:00PM">5:00 Pm - 9:00 Pm</option>
                </select>
                <span className="text-red-500">{errors.sessionTime?.message}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-x-6 mt-3">
          <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">Fees</label>
              <div className="mt-2">
                <input type="text" {...register('fees')} id="fees"
                  autoComplete="Fees"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="mt-6 border-b pb-2 space-y-6">
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input {...register('termsAndCondition')}
              id="termsAndCondition"

              type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />

          </div>
          <div className="text-sm leading-6">
            <label htmlFor="termsAndCondition" className="font-medium text-gray-900">I accept Skillup labs Pty Course enrollment Terms and Conditions.</label>
            <span className="text-red-500">{errors.termsAndCondition?.message}</span>
          </div>
        </div>
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input {...register('refundPolicy')}
              id="refundPolicy"

              type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="refundPolicy" className="font-medium text-gray-900">I will pay agreed course fee after enrollment and accept no refund policy.</label>
            <span className="text-red-500">{errors.refundPolicy?.message}</span>
          </div>
        </div>

      </div>
      <div className="mt-6 mb-4 flex items-center justify-end gap-x-6">
        <Link href="./" className="rounded-full px-3 py-2 text-sm shadow-md font-semibold  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Cancel</Link>
        <button type="submit"
          className="rounded-full bg-golden px-3 py-2 text-sm shadow-md font-semibold   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enroll</button>
      </div>
    </form>
      )
}