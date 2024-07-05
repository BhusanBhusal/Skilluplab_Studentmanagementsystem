'use server'

import { updateStudentData } from "@/services/student.service"


export const resetStudentPassword= async(data)=>{
     const res = await updateStudentData(data);
     return res;

}
