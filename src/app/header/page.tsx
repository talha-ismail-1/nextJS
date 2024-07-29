"use client";
import { useSidebar } from '../components/SidebarContext'; // Adjust path as necessary
import Link from 'next/link';
function Header() {
    const { toggleNav } = useSidebar();

    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white width-100">
            <div className="headerSection flex items-center gap-6">
                <div id="main" className="flex-1">
                    <span className="sidebarbtn text-3xl cursor-pointer p-4" onClick={toggleNav}>&#9776;</span>
                </div>
                <h1 className="">Web Application</h1>
                <div className="headerSection-items">
                    <nav>
                        <ul className="flex gap-4">
                            <li>
                                <Link href="#homeSection" className="hover:text-gray-400">Home</Link>
                            </li>
                            <li>
                                <Link href="#aboutSection" className="hover:text-gray-400">About</Link>
                            </li>
                            <li>
                                <Link href="#sectionServices" className="hover:text-gray-400">Services</Link>
                            </li>
                            <li>
                                <Link href="#contactSection" className="hover:text-gray-400">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/book" className="hover:text-gray-400">Book Now!</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
