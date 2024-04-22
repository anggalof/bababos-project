import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { checkUserAuthentication } from '../../../utils/auth';

export default function NavbarMenu({ handleLogout }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (checkUserAuthentication()) {
      setIsLoggedIn(checkUserAuthentication());
    }
  }, [])

  return (
    <div className="justify-between w-full flex md:w-auto">
      {!isLoggedIn ? (
        <ul className="flex flex-col items-center font-extralight bg-[#fceed5] md:bg-[#ffe7ba] text-sm p-4 md:p-0 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li>
            <Link href="#" className="text-lg font-normal block border-b-2 border-white md:border-b-0 py-2 px-3 md:p-0 text-gray-900 hover:text-black">
              Login
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex justify-between items-center bg-[#fceed5] md:bg-[#ffe7ba] w-full font-extralight text-sm p-4 md:p-0 border border-gray-100 rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li>
            <Link href="/dashboard" className="flex items-center font-semibold hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <div className="text-xl cursor-pointer text-slate-900">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
          </li>
          <li>
            <div className="mt-0">
              <Link href="/profile" className="flex items-center">
                <div className="hover:bg-[#fceed5] w-10 rounded-full cursor-pointer">
                  <img src="/images/office.png" alt="profile" className="w-full rounded-full object-cover h-[2.6rem]" />
                </div>
                <div>
                  <div className="text-xs font-semibold ml-2">Gross Play Indonesia</div>
                  <div className="text-xs ml-2">click here to profile <i className="fa fa-angle-right"></i></div>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="mr-4 md:mt-0">
              <button type="button" onClick={handleLogout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Logout
              </button>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
}
