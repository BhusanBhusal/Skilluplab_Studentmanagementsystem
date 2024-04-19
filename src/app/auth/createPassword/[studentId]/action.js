'use server'
import { updateStudentPasswordByid } from "@/services/student.service";


export const registerStudentPassword= async(data)=>{

    console.log(data);
    const resp = await updateStudentPasswordByid(data);
    return resp;
}
