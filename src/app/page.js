import Image from "next/image";

export default function Home() {
  
  return (
    <div className="text-center mt-20">
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      Nextjs Demo
    </h1>
    <p className="mt-6 text-lg leading-8 text-gray-600">
      Demo for learning nextjs app
    </p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <a
        href="/auth/login"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Log In
      </a>
      <a href="/auth/register" className="text-sm font-semibold leading-6 text-gray-900">
       Register
      </a>
    </div>
  </div>
  );
}
