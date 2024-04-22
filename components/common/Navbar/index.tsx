import Link from "next/link";
import Router from 'next/router';
import { useState } from "react";
import { clearStorages } from '../../../utils/storage';
import NavbarMenu from "../NavbarMenu";
import styles from './style.module.css';

export default function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(true)
  };

  const handleCloseModal = () => {
    setOpen(false)
  };

  const handleLogout = () => {
    clearStorages();
    Router.push('/login');
  };

  return (
    <div className={styles.root}>
      <nav className="border-gray-200 bg-[#ffe7ba]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <img src="/images/bababos-logo.png" className="w-32 object-cover h-8" alt="Bababos Logo" />
          </Link>
          <div className="flex md:order-2">
            <div className="hidden md:block">
              <NavbarMenu handleLogout={handleLogout} />
            </div>

            <div
              className="ml-auto p-1 text-black flex md:hidden md:bg-[#292e36]"
              onClick={handleToggle}
            >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </div>

            <div
              className={`${isOpen ? 'block' : 'hidden'} `}
            >
              <div
                className={`${isOpen && styles.overlay}`}
                onClick={handleCloseModal}
              ></div>
              <div className="bg-[#292e36] z-[9999] w-full fixed right-0 top-0 overflow-y-auto">
                <NavbarMenu handleLogout={handleLogout} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
