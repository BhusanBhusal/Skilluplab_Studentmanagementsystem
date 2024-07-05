import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";

export default function WelcomeAdmin(){
    const session = cookies().get('session');
    console.log(session);
  //  const userData= await decrypt(session);
     if(!session){
        permanentRedirect('/auth/login');
     }else{
     
     }
    return(
       <>
         <>Welcome</>
       </>
    )
}