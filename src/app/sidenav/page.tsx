// components/SideNav.tsx
"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSidebar } from '../components/SidebarContext'; // Adjust path as necessary
import { useRouter } from 'next/navigation';

const SideNav = (porps : {title: string}) => {
    const { isOpen, closeNav } = useSidebar();
    const router = useRouter();
    const sidenavRef = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        localStorage.removeItem('auth');
        router.replace('/login');
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (sidenavRef.current && !sidenavRef.current.contains(event.target as Node)) {
            closeNav();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={sidenavRef} id="mySidenav" className={`sidenav ${isOpen ? 'active' : ''}`}>
            <span className="closebtn" onClick={closeNav}>&times;</span>
            <ul className="flex flex-col h-full">
                <li>
                    <h1>{porps.title}</h1>
                </li>
                <li>
                    <Link href={'/home'} className="hover:text-gray-400" onClick={closeNav}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'} onClick={closeNav}>About</Link>
                </li>
                <li>
                    <Link href={'/services'} onClick={closeNav}>Services</Link>
                </li>
                <li>
                    <Link href={'/book'} onClick={closeNav}>Book Now!</Link>
                </li>
                <li>
                    <Link href={'/contact'} onClick={closeNav}>Contact Us</Link>
                </li>
                <li className="mt-auto">
                    <div className="sidebar-footer">
                        <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-500 mt-4" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default SideNav;
