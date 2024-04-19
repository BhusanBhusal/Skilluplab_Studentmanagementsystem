'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'


export default function AuthLayout({children}) {
    const router = useRouter();
    const path = usePathname();
    var classvar="";
    if(path === '/auth/login' ){
      classvar="mt-10  sm:w-full sm:mx-auto sm:max-w-[480px]";
    }
    else if(path === '/auth/register'){
      classvar=" mt-10 sm:mx-auto lg:max-w-[720px]";
    }
    else{
      classvar="mt-10  sm:w-full sm:mx-auto sm:max-w-[480px]";
    }
  return (
      <div className="flex min-h-full flex-1 flex-col py-12 sm:px-3 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/">
            <img
              className="mx-auto h-10 w-auto"
              src="/skilluplab.png"
              alt="SkillUpLab"
            />
          </Link>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {
                (path === '/auth/login') && (
                  
                    <>Welcome back! Log in to your account.</>
                )
                
            }
            {
                (path === '/auth/register') && (
                    <>Get Enroll in Skillup Labs</>
                )
            }
            
          </h2>
        </div>

        <div className={classvar}>
          <div className="bg-white px-6 py-6 shadow sm:rounded-lg sm:px-12">
            {children}
          </div>

         
         {
             <p className="mt-10 text-center text-sm text-gray-500">
             
             {
                (path === '/auth/login') && (
                    <> New user? {' '}
                    <a href="/auth/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                      Register
                    </a>
                    </>
                )
            }
            {
                (path === '/auth/register') && (
                    <>  Already have account?  {' '}
                        <a href="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Log in
                        </a>
                    </>
                )
            }
            {
                (path === `/auth/createPassword/[studentId]`) && (
                    <>  Already have account?  {' '}
                        <a href="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Log in
                        </a>
                    </>
                )
            }
             
           </p>
         }
        </div>
      </div>
  )
}