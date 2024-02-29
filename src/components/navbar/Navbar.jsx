import React, { Fragment, useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import Search from '../../components/search/Search';

function Navbar() {
    const context = useContext(myContext);
    const { mode, toggleMode } = context;
    const [open, setOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    const logout = () => {
        localStorage.clear('user');
        window.location.href = '/login';
    };
    const cartItems = useSelector((state) => state.cart);

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <div className="bg-white sticky top-0 z-50">
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full">
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                <div className="space-y-6 border-t border-gray-200 px-4 py-6 pt-20">
                                    <div className="flex lg:ml-auto">
                                        <button className={`flex items-center justify-center py-2 border border-transparent rounded-md shadow-sm text-base font-medium  ${mode === 'light' ? 'bg-white text-black' : 'bg-gray-750 hover:bg-gray-700 text-white'}`}
                                            onClick={toggleMode}>
                                            {mode === 'light' ? (
                                                <>
                                                    <FaToggleOff className='mr-2' size={30} />
                                                    <span>Light Mode</span>
                                                </>
                                            ) : (
                                                <>
                                                    <FaToggleOn className='mr-2' size={30} />
                                                    <span>Dark Mode</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    <Link to={'/allproducts'} className="-m-2 block p-2 font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                        All Categories
                                    </Link>
                                    {user && (
                                        <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '' }} className="-m-2 block p-2 font-medium text-gray-900">
                                            My orders
                                        </Link>
                                    )}
                                    {user?.user?.email === import.meta.env.VITE_REACT_ADMIN_EMAIL && (
                                        <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                            Admin
                                        </Link>
                                    )}
                                    <div className="-m-2 flex items-center p-2">
                                        <img
                                            src="https://imgs.search.brave.com/-s4lx_uBUcdBGhWP_X1qGmZ75sKDPlM4vNM-sV0-rHM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzYzLzEzLzMx/LzM2MF9GXzE2MzEz/MzEwN19uQWxNZ2pQ/VXljaVRFblpDczRH/Rjk3d1NUWVhEQUhB/bi5qcGc"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0" />
                                        <span className="ml-2 block text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>INDIA</span>
                                        <span className="sr-only">, change currency</span>
                                    </div>
                                </div>
                                <div className="ml-4 mb-4 flow-root lg:ml-6">
                                    <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '' }}>{cartItems.length}</span>
                                        <span className="sr-only">items in cart, view bag</span>
                                    </Link>
                                </div>
                                <div className="border-t border-gray-200 px-4 py-6 flex justify-center">
                                    {user ? (
                                        <button onClick={logout} className="bg-gray-300 px-5 py-2 rounded-xl" style={{ color: mode === 'dark' ? 'black' : '' }}>
                                            Logout
                                        </button>
                                    ) : (
                                        <Link to={'/signup'} className="bg-gray-300 px-5 py-2 rounded-xl" style={{ color: mode === 'dark' ? 'black' : '' }}>
                                            Signup
                                        </Link>
                                    )}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <header className="relative bg-green">
                <nav aria-label="Top" className="bg-green-100 px-4 sm:px-6 lg:px-8 shadow-xl ">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 lg:hidden"
                                onClick={toggleMenu}>
                                {open ? <RxCross2 /> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={closeMenu}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>}
                            </button>
                            <Link to={'/'} className='flex'>
                                <div className="flex items-center">
                                    <img
                                        src="/logo.png"
                                        alt="ShopDude Logo"
                                        className="h-12 w-42 px-2 py-1 rounded"
                                        style={{ filter: mode === 'dark' ? 'invert(0)' : 'invert(0)' }} />
                                </div>
                            </Link>
                        </div>
                        <Search />
                        <div className="flex items-center">
                            {user && (
                                <div className="hidden lg:flex lg:items-center">
                                    <Link to={'/profile'}>
                                        <img
                                            className="inline-block w-10 h-10 rounded-full"
                                            src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                                            alt="User0001" />
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
