import { getAllStudentsModel,createNewStudentModel, getStudentById, getStudentIdByEmail } from "@/models/student.model";
import { updateStudentPassword } from "@/models/student.model";
import { data } from "autoprefixer";
import * as bcrypt from "bcryptjs";


export const createNewStudent=async(data)=>{
   const stuData = await createNewStudentModel(data);
   return stuData;
}

export const getAllStudents= async()=>{
    const studentlist= await getAllStudentsModel();
    return studentlist;
}

export const getStudentDetailsById = async(studentId)=>{
    const studentData= await getStudentById(studentId);
    return studentData;
}

export const updateStudentPasswordByid = async(data) => {
    const hashPassword = await bcrypt.hash(data.password,10);
    try {
           await updateStudentPassword({...data, password:hashPassword});
        return {
            error:false
        }
    } catch (error) {
        return{
            error:true,
            errorMessage: 'Something went wrong, Try Again!!'
        }
    }
    

}

export const getStudentDetailsByEmail = async(data)=>{
    const studentdetails = await getStudentIdByEmail(data.email);
    return studentdetails;
}