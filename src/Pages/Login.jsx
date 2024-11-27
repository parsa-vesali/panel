import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('admin');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'admin') {
            sessionStorage.setItem('isLoggedIn', 'true');
            navigate('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="flex h-[100vh] flex-1 flex-col">
            <div className="px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-lg lg:text-2xl font-Dana-Bold  leading-9 text-gray-800">
                        سیستم الکترونیکی مدرسه
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg p-10 shadow-xl bg-white">
                    <form className=" space-y-8 lg:space-y-10 " onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="username" className="block font-medium leading-6 text-gray-900">
                                نام کاربری
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    value={username}
                                    name="username"
                                    type="text"
                                    placeholder="لطفا نام کاربری خود را وارد کنید"
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="block w-full rounded-md border-0 p-2 lg:p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block font-medium leading-6 text-gray-900">
                                    رمز عبور
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    placeholder="لطفا رمز عبور خود را وارد کنید"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 p-2 lg:p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="">
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-500 p-2 lg:p-3 leading-6 text-white shadow-sm duration-100 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 "
                            >
                                وارد شوید
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm">
                        <a href="#" className="font-semibold leading-6 text-indigo-500 duration-100 hover:text-indigo-400">
                            آیا رمز عبور خود را فراموش کرده اید؟
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
