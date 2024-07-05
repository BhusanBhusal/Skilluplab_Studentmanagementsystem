import { useState } from "react";


export default function ForgetPasswordMessage(studentID) {
    const [studentData, setStudentData] = useState(null)
    const studentId = parseInt(studentID);
    useEffect(() => {
        (async () => {
            const response = await getStudentDetailsById(studentId);
            setStudentData(response)
        })();
    }, [])
    return (
        <>
            <div className="text-center">
                <h3>Hey {studentData.FullName}, Forgot your password?</h3>
                <span>Please! Check your email and follow the reset instruction</span>
            </div>
        </>
    )
}