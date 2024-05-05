import React, { Fragment, useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import Search from '../../components/search/Search';
import { signOut } from "firebase/auth";
import { auth } from "../../fireabase/FirebaseConfig";

function Navbar() {
    const context = useContext(myContext);
    const { mode, toggleMode } = context;
    const [open, setOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    const cartItems = useSelector((state) => state.cart);

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    const logout = () => {
        localStorage.clear('user');
        window.location.href = '/login';
    };

    const handleClick = () => {
        if (!user) {
            history.push('/login');
        }
    };

    return (
        <div className={`bg-${mode === 'dark' ? 'gray-900' : 'white'} sticky top-0 z-50`} style={{ color: mode === 'dark' ? 'white' : '' }}>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-50" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="absolute inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full">
                        <Dialog.Panel className="absolute top-0 left-0 h-full w-64 bg-white shadow-lg">
                            <div className="flex flex-col h-full">
                                <div className="p-4 flex items-center border-b">                                    
                                    <button className="focus:outline-none ml-auto" onClick={closeMenu} style={{ color: mode === 'dark' ? 'white' : '' }}>
                                        <RxCross2 className="text-gray-500" size={24} />
                                    </button>                                    
                                </div>
                                <div className="flex-grow">
                                    <button className="focus:outline-none m-3" onClick={toggleMode}>
                                        {mode === 'light' ? (
                                            <FaToggleOff className="text-gray-500" size={24} />
                                        ) : (
                                            <FaToggleOn className="text-gray-500" size={24} />
                                        )}
                                    </button>
                                    <Link to={'/allproducts'} className="block m-4 hover:bg-gray-100 transition duration-300 border-b border-gray-200">
                                        All Categories
                                    </Link>
                                    <Link to={'/order'} className="block p-4 hover:bg-gray-100 transition duration-300 border-b border-gray-200" onClick={handleClick}>
                                        My Orders
                                    </Link>
                                    {user?.user?.email === import.meta.env.VITE_REACT_ADMIN_EMAIL && (
                                        <Link to={'/dashboard'} className="block p-4 hover:bg-gray-100 transition duration-300 border-b border-gray-200">
                                            Admin
                                        </Link>
                                    )}
                                    <Link to={'/cart'}
                                        className="block p-4 hover:bg-gray-100 transition duration-300 border-b border-gray-200"
                                        onClick={handleClick}>
                                        Cart ({cartItems.length})
                                    </Link>
                                    <Link to={'/recipe'} className="block p-4 hover:bg-gray-100 transition duration-300 border-b border-gray-200">
                                        AI Recipes
                                    </Link>
                                    <Link to={'/profile'} className="block p-4 hover:bg-gray-100 transition duration-300 border-b border-gray-200">
                                        <img
                                            className="inline-block w-10 h-10 rounded-full"
                                            src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg"/>
                                        Profile
                                    </Link>
                                    <div className="flex justify-center border-t border-gray-200 p-4">
                                        {user ? 
                                        (<button onClick={logout} className="bg-gray-300 px-5 py-2 rounded-xl" style={{ color: mode === 'dark' ? 'black' : '' }}>
                                            Logout
                                            </button>) : 
                                        (<Link to={'/signup'} className="bg-gray-300 px-5 py-2 rounded-xl" style={{ color: mode === 'dark' ? 'black' : '' }}>
                                            Signup
                                        </Link>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>
            <header className="bg-green">
                <nav className="bg-green-100 px-4 sm:px-6 lg:px-8 shadow-xl">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                            <Link to={'/'} className="flex items-center">
                                <img
                                    src="/logo.png"
                                    alt="ShopDude Logo"
                                    className="h-12 w-42 px-2 py-1 rounded"/>
                            </Link>
                        </div>
                        <Search/>
                        <div className="flex items-center">
                            {user && (
                                <div className="hidden lg:flex lg:items-center">
                                    <Link to={'/profile'}>
                                        <img
                                            className="inline-block w-10 h-10 rounded-full"
                                            src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg"
                                            alt="User0001"/>
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
