'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'


export default function AdminLayout({ children }) {
  const router = useRouter();
  const path = usePathname();
  return (
    <div className="flex min-h-full flex-1 flex-col py-12 sm:px-3 lg:px-6">
      <div className=''>
        <div className="bg-white px-6 py-6 shadow sm:rounded-lg sm:px-12">

        </div>
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">

          </div>

          <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            {children}

          </div>
        </>
      </div>
    </div>
  )
}