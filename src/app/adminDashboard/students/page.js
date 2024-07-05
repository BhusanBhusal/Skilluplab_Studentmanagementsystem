'use client'
import React from "react";
import { getAllStudents, getStudentDetailsById } from '@/services/student.service';
import { PaperClipIcon } from '@heroicons/react/20/solid'
import date from 'date-and-time';

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import enrollmentvalidationSchema from '/src/app/auth/register/validationSchema';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BrowserRouter, Link } from "react-router-dom";
import { addStudentDetails, deleteEnrollStudent } from "./action";
import DeleteConfirmation from "../components/DeleteConfirmation";
import StudentModal from "../components/AddStudent";



// function StudentModal({ open, setOpen, currentStudentDetails, addeditStudent }) {
//     console.log({  currentStudentDetails });
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//     } = useForm({
//         defaultValues: {
//             id: currentStudentDetails ? currentStudentDetails.id : '',
//             fullName: currentStudentDetails ? currentStudentDetails.fullName : '',
//             email: currentStudentDetails ? currentStudentDetails.email : "",
//             mobile: currentStudentDetails ? currentStudentDetails.mobile : "",
//             residentalAddress: currentStudentDetails ? currentStudentDetails.residentalAddress : "",
//             course: currentStudentDetails ? currentStudentDetails.course : "",
//             education: currentStudentDetails ? currentStudentDetails.education : "",
//             college: currentStudentDetails ? currentStudentDetails.college : "",
//             termsAndCondition: currentStudentDetails ? currentStudentDetails.termsAndCondition : "",
//             refundPolicy: currentStudentDetails ? currentStudentDetails.refundPolicy : "",
//             enrollmentDate: currentStudentDetails ? date.format(new Date(currentStudentDetails.enrollmentDate), "YYYY-MM-DD"): "",
//             sessionTime: currentStudentDetails ? currentStudentDetails.sessionTime : "",
//             fees: currentStudentDetails ? currentStudentDetails.fees : "",
//         },
//         resolver: yupResolver(enrollmentvalidationSchema),
//     });


//     const studentSubmit = async (data) => {
//         console.log(data);
//         await addeditStudent(data);
//     }
//     return (
//         <BrowserRouter>
//             <Transition show={open}>
//                 <Dialog className="relative z-999" open={open} onClose={setOpen}>
//                     <TransitionChild
//                         enter="ease-out duration-300"
//                         enterFrom="opacity-0"
//                         enterTo="opacity-100"
//                         leave="ease-in duration-200"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                     >
//                         <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
//                     </TransitionChild>

//                     <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//                         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//                             <TransitionChild
//                                 enter="ease-out duration-300"
//                                 enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//                                 enterTo="opacity-100 translate-y-0 sm:scale-100"
//                                 leave="ease-in duration-200"
//                                 leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//                                 leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//                             >
//                                 <form className="space-y-6" onSubmit={handleSubmit(studentSubmit)} >

//                                     <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-150">
//                                         <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//                                             <div className="sm:flex sm:items-start">
//                                                 <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
//                                                     <FontAwesomeIcon icon={faUserPlus} />
//                                                 </div>
//                                                 <div className="mt-4 text-center sm:ml-4 sm:mt-0 sm:text-left">
//                                                     <DialogTitle as="h3" className="text-base mt-2 font-semibold leading-6 text-gray-900">
//                                                         Add Student
//                                                     </DialogTitle>
//                                                     <div className="mt-2">

//                                                         <div className="">
//                                                             <div className="border-b pb-6 border-gray-900/10 mt-6 mb-3">
//                                                                 <h2 className="text-base font-semibold text-gray-900">Personal Information</h2>
//                                                                 <div className=" grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
//                                                                     <input type="hidden" {...register('id')} />
//                                                                     <div className="sm:col-span-3">
//                                                                         <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
//                                                                             Full Name <span className="text-red"> *</span>
//                                                                         </label>
//                                                                         <div className="mt-2">
//                                                                             <input
//                                                                                 {...register('fullName')}
//                                                                                 type="text"
//                                                                                 id="fullName"


//                                                                                 className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                                                             />
//                                                                             <span className="text-red-500">{errors.fullName?.message}</span>
//                                                                         </div>
//                                                                     </div>
//                                                                     <div className="sm:col-span-3">
//                                                                         <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email <span className="text-red-500"> *</span></label>
//                                                                         <div className="mt-2">
//                                                                             <input {...register('email')}
//                                                                                 type="text"
//                                                                                 // value={currentStudentDetails  ? currentStudentDetails.email : null }
//                                                                                 id="email"
//                                                                                 autoComplete="email"
//                                                                                 className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                                                                         </div>
//                                                                         <span className="text-red-500">{errors.email?.message}</span>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className=" grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
//                                                                     <div className="sm:col-span-6 mt-2">
//                                                                         <label className="block text-sm font-medium leading-6 text-gray-900">Mobile <span className="text-red-500"> *</span></label>
//                                                                         <div className="mt-2">
//                                                                             <input {...register('mobile')}
//                                                                                 id="mobile"
//                                                                                 //value={currentStudentDetails  ? currentStudentDetails.mobile : "" }
//                                                                                 type="text"
//                                                                                 autoComplete="mobile"
//                                                                                 className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                                                                         </div>
//                                                                         <span className="text-red-500">{errors.mobile?.message}</span>
//                                                                     </div>
//                                                                     <div className="sm:col-span-6">
//                                                                         <label className="block text-sm font-medium leading-6 text-gray-900">Residental Address <span className="text-red-500"> *</span></label>
//                                                                         <div className="mt-2">
//                                                                             <input {...register('residentalAddress')}
//                                                                                 //value={currentStudentDetails  ? currentStudentDetails.residentalAddress : null }
//                                                                                 id="residentaladdress"
//                                                                                 type="text"
//                                                                                 className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                                                                         </div>
//                                                                         <span className="text-red-500">{errors.residentalAddress?.message}</span>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className="border-b pb-6">
//                                                             <h2 className="text-base font-semibold text-gray-900">Academic  Information</h2>
//                                                             <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
//                                                                 <div className="sm:col-span-3">
//                                                                     <label className="block text-sm font-medium leading-6 text-gray-900">Education<span className="text-red-500"> *</span></label>
//                                                                     <div className="mt-2">
//                                                                         <input type="text" {...register('education')} id="education"
//                                                                             autoComplete="education"
//                                                                             className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                                                                         <span className="text-red-500">{errors.education?.message}</span>
//                                                                     </div>
//                                                                 </div>

//                                                                 <div className="sm:col-span-3">
//                                                                     <label className="block text-sm font-medium leading-6 text-gray-900">College/University <span className="text-red-500"> *</span></label>
//                                                                     <div className="mt-2">
//                                                                         <input {...register('college')} type="text" id="college"
//                                                                             autoComplete="college"
//                                                                             className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                                                                         <span className="text-red-500">{errors.college?.message}</span>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className="mt-3 border-b pb-6">
//                                                             <h2 className="text-base font-semibold text-gray-900">Course Information <span className="text-red-500"> *</span></h2>
//                                                             <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
//                                                                 <div className="sm:col-span-12">
//                                                                     <label className="block text-sm font-medium leading-6 text-gray-900">Course</label>
//                                                                     <div className="mt-2">
//                                                                         <select {...register('course')}
//                                                                             id="course"
//                                                                             name="course"
//                                                                             autoComplete="course"
//                                                                             className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
//                                                                             <option value=''>Choose from Course</option>
//                                                                             <option value="softwareDevelopment">Software Development</option>
//                                                                             <option value="QA">QA Engineer</option>
//                                                                             <option value="dataAnalytics">Data Analytics</option>
//                                                                         </select>
//                                                                         <span className="text-red-500">{errors.course?.message}</span>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div className="grid gap-x-6 mt-3">
//                                                                 <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
//                                                                     <div className="sm:col-span-3">
                                                                       
                                                                      
//                                                                         <label className="block  text-sm font-medium leading-6 text-gray-900">Enrollment Date <span className="text-red-500"> *</span></label>
//                                                                         <div className="mt-2">
//                                                                             <input {...register('enrollmentDate')}
//                                                                                 type="date" id="enrollmentdate"
//                                                                                 autoComplete="Date"
                                                                                
//                                                                                 className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                                                                             <span className="text-red-500">{errors.enrollmentDate?.message}</span>
//                                                                         </div>
//                                                                     </div>
//                                                                     <div className="sm:col-span-3">
//                                                                         <label className="block text-sm font-medium leading-6 text-gray-900">Session time table <span className="text-red-500"> *</span></label>
//                                                                         <div className="mt-2">
//                                                                             <select {...register('sessionTime')}
//                                                                                 id="classtimetable" autoComplete="course" className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
//                                                                                 <option value="">Choose from Session</option>
//                                                                                 <option value="9:00AM">9:00 Am - 1:00 Pm</option>
//                                                                                 <option value="2:00PM">2:00 Pm - 6:00 Pm</option>
//                                                                                 <option value="5:00PM">5:00 Pm - 9:00 Pm</option>
//                                                                             </select>
//                                                                             <span className="text-red-500">{errors.sessionTime?.message}</span>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div className="grid gap-x-6 mt-3">
//                                                                 <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
//                                                                     <div className="sm:col-span-3">
//                                                                         <label className="block text-sm font-medium leading-6 text-gray-900">Fees</label>
//                                                                         <div className="mt-2">
//                                                                             <input type="text" {...register('fees')} id="fees"
//                                                                                 autoComplete="Fees"
//                                                                                 className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

//                                                                         </div>
//                                                                     </div>

//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className="mt-6 border-b pb-2 space-y-6">
//                                                             <div className="relative flex gap-x-3">
//                                                                 <div className="flex h-6 items-center">
//                                                                     <input {...register('termsAndCondition')}
//                                                                         id="termsAndCondition"

//                                                                         type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />

//                                                                 </div>
//                                                                 <div className="text-sm leading-6">
//                                                                     <label htmlFor="termsAndCondition" className="font-medium text-gray-900">I accept Skillup labs Pty Course enrollment Terms and Conditions.</label>
//                                                                     <span className="text-red-500">{errors.termsAndCondition?.message}</span>
//                                                                 </div>
//                                                             </div>
//                                                             <div className="relative flex gap-x-3">
//                                                                 <div className="flex h-6 items-center">
//                                                                     <input {...register('refundPolicy')}
//                                                                         id="refundPolicy"

//                                                                         type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
//                                                                 </div>
//                                                                 <div className="text-sm leading-6">
//                                                                     <label htmlFor="refundPolicy" className="font-medium text-gray-900">I will pay agreed course fee after enrollment and accept no refund policy.</label>
//                                                                     <span className="text-red-500">{errors.refundPolicy?.message}</span>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                         {/* <div className="mt-6 mb-4 flex items-center justify-end gap-x-6">
//                                                             <Link href="./" className="rounded-full px-3 py-2 text-sm shadow-md font-semibold  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Cancel</Link>
//                                                             <button type="submit"
//                                                                 className="rounded-full bg-golden bg-indigo-600 px-3 py-2 text-sm shadow-md font-semibold  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enroll</button>
//                                                         </div> */}

//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//                                             <div className="mt-6 mb-4 flex items-center justify-end gap-x-6">
//                                                 <Link href="./" onClick={() => setOpen(false)} className="rounded-full px-3 py-2 text-sm shadow-md font-semibold  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Cancel</Link>
//                                                 <button type="submit"
//                                                     className="rounded-full bg-golden px-3 py-2 text-sm shadow-md font-semibold  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enroll</button>
//                                             </div>
//                                         </div>
//                                     </DialogPanel>
//                                 </form>

//                             </TransitionChild>
//                         </div>
//                     </div>
//                 </Dialog>
//             </Transition>
//         </BrowserRouter>
//     );
// }


export default function Students() {
    const [showModal, setShowModal] = useState(false);
    const [allStudents, setAllStudents] = useState();
    const [openDelete, setOpenDelete] = useState(false);
    const [currentId, setCurrentId] = useState(false);
    const [currentStudentDetails, setCurrentStudentDetails] = useState();
    useEffect(() => {
        (async () => {
            const students = await getAllStudents();
            if (students && students.length) {
                setAllStudents(students)
            }
        })();
    }, [showModal]);
    const openStudentModal = async () => {
        setCurrentStudentDetails(null);
        setShowModal(true);
    }

    const deleteStudent = async (studentId) => {
        setOpenDelete(true);
        setCurrentId(studentId);

    }
    const deleteConfirm = async () => {
        const newStudentList = await deleteEnrollStudent(currentId);
        setAllStudents(newStudentList);
        setOpenDelete(false);
    }
    const editStudent = async (studentId) => {
        const stuData = await getStudentDetailsById(studentId);
        console.log(stuData);
        setCurrentStudentDetails(stuData);
        setShowModal(true);
    }
    const addeditStudent = async (data) => {
        console.log(data);
        const response = await addStudentDetails(data);
        console.log(response);
        if (response) {
            setShowModal(false);
        }
    }

    return (
        <>  <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="px-4 py-6 flex justify-between md:px-6 xl:px-7.5">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    Student List's

                </h4>

                <a href="#" onClick={() => openStudentModal()} className="inline-flex items-center  gap-1 rounded-full border border-primary  text-center font-medium text-primary hover:bg-opacity-90 lg:px-2 xl:px-3">
                    <span>
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                    Add Student
                </a>
            </div>


            <div className="">
                <div className="">
                    <div className="max-w-full overflow-x-auto">
                        <div className="min-w-[1170px]">
                            <div className="grid grid-flow-col bg-[#F9FAFB] px-5 py-4 dark:bg-meta-4 lg:px-7.5 2xl:px-11">
                                <div className="">
                                    <h5 className="font-medium text-[#637381] dark:text-bodydark">S.N</h5>
                                </div>
                                <div className="">
                                    <h5 className="font-medium text-[#637381] dark:text-bodydark">Name</h5>
                                </div>
                                <div className="">
                                    <h5 className="font-medium text-[#637381] dark:text-bodydark">Email</h5>
                                </div>
                                <div className="">
                                    <h5 className="font-medium text-[#637381] dark:text-bodydark">Mobile</h5>
                                </div>

                                <div className="">
                                    <h5 className="font-medium text-[#637381] dark:text-bodydark">Course</h5>
                                </div>

                                <div className="">
                                    <h5 className="font-medium text-[#637381] dark:text-bodydark">Enrollment Date</h5>
                                </div>
                                <div className="">
                                    <h5 className="font-medium text-[#637381] dark:text-bodydark">Session Time</h5>
                                </div>
                                <div className="">
                                    <h5 className="font-medium text-[#637381] dark:text-bodydark">Action</h5>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-boxdark">
                                {allStudents?.map((stu, index) => {
                                    return (
                                        <div key={index} className="grid grid-flow-col border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                                            <>
                                                <div className="">
                                                    <p className="text-sm font-medium text-black dark:text-white">
                                                        {index + 1}
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <p className="text-sm font-medium text-black dark:text-white">
                                                        {stu.fullName}
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <p className="text-sm font-medium text-black dark:text-white">{stu.email}</p>

                                                </div>
                                                <div className="">
                                                    <p className="text-sm font-medium text-black dark:text-white">{stu.mobile}</p>

                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-black">{stu.education}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-black">{stu.enrollmentDate.toDateString()}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-black">{stu.sessionTime}</p>
                                                </div>
                                                <div>
                                                    <button onClick={() => deleteStudent(stu.id)} className="inline-flex items-center justify-center rounded-full h-6 bg-red py-2 px-2 text-center text-white">  Delete</button>
                                                    <button onClick={() => editStudent(stu.id)} className="bg-golden inline-flex items-center justify-center text-white rounded-full py-2 px-3 ml-1 h-6">Edit</button>
                                                </div>
                                            </>
                                        </div>
                                    )
                                })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            {
                showModal && (
                    <StudentModal addeditStudent={addeditStudent} open={showModal} setOpen={setShowModal} currentStudentDetails={currentStudentDetails} />
                )
            }

            <DeleteConfirmation deleteConfirm={deleteConfirm} openDelete={openDelete} setOpenDelete={setOpenDelete} />


        </>
    )
}