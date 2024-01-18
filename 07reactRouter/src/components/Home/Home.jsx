import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://i.ibb.co/5BCcDYB/Remote2.png"
                            alt="image1"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Download Now
                            <span className="hidden md:block text-xl">Lorem Ipsum</span>
                        </h2>
                        <Link
                            className="inline-flex text-white items-center px-4 py-2 font-medium bg-orange-700 rounded-lg hover:opacity-75 mt-6"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid place-items-center sm:mt-16">
    <img className="sm:w-96 w-48 mt-16" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
</div>

            <h1 className="text-center text-2xl md:text-5xl py-10 font-medium text-black">Lorem Ipsum Yojo</h1>
        </div>
    );
}
