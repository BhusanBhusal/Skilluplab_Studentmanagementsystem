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
        {children}
        </div>
        
      </div>
    </div>
  )
}