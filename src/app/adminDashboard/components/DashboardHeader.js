'use client'

import Image from "next/image";
import { Link,BrowserRouter } from "react-router-dom";
import UserDropdown from './UserDropdown'
function DashboardHeader() {
    return (
        <BrowserRouter>
            
            <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
                <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                    <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                        {/* <!-- Hamburger Toggle BTN --> */}
                        <button
                            aria-controls="sidebar"
                            onClick={(e) => {
                                e.stopPropagation();
                               
                            }}
                            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
                        >
                            <span className="relative block h-5.5 w-5.5 cursor-pointer">
                                <span className="du-block absolute right-0 h-full w-full">
                                   
                                </span>
                                <span className="absolute right-0 h-full w-full rotate-45">
                                   
                                </span>
                            </span>
                        </button>
                        {/* <!-- Hamburger Toggle BTN --> */}

                        <Link className="block flex-shrink-0 lg:hidden" href="/">
                            <Image
                                width={32}
                                height={32}
                                src={"/images/logo/logo-icon.svg"}
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    <div className="hidden sm:block">
                        <form action="https://formbold.com/s/unique_form_id" method="POST">
                            <div className="relative">
                                <button className="absolute left-0 top-1/2 -translate-y-1/2">
                                    
                                </button>

                                <input
                                    type="text"
                                    placeholder="Type to search..."
                                    className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center gap-3 2xsm:gap-7">
                        {/* <!-- User Area --> */}
                        <UserDropdown />
                        {/* <!-- User Area --> */}
                    </div>
                </div>
            </header>
        </BrowserRouter>
    );
}

export default DashboardHeader;