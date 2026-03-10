import React, { useState } from 'react'

export default function About({mode}) {

    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'rgb(6 8 83)'
    })

    

    return (
        <div >
            <div className={` w-3/4 mx-auto p-5  ${mode==='dark' ? 'border border-white' : 'border border-black'} rounded-xl mt-6 mb-2`} >

                <details className={`group border border-slate-400 rounded-md px-2  ${mode==='dark' ? 'text-white bg-[rgb(6 8 83)]' : 'text-[rgb(6 8 83)] bg-gray-300'}`}>

                    <summary className="flex justify-between items-center py-5 cursor-pointer font-medium">
                        <span>What is Tailwind CSS ?</span>

                        <span className="transition-transform duration-300 group-open:rotate-45 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                            </svg>
                        </span>

                    </summary>

                    <div className="pb-5 text-sm text-slate-500">
                        Tailwind CSS is a "utility-first" CSS framework that provides a large collection of single-purpose utility classes to build custom designs directly within your HTML. Unlike traditional frameworks like Bootstrap, it doesn't offer predefined, opinionated components (like a pre-styled "button" class). Instead, you compose low-level classes (e.g., bg-blue-500, p-4, font-bold) to create unique and responsive user interfaces.
                    </div>

                </details>
                <details className={`group border border-slate-400 rounded-md px-2 ${mode==='dark' ? 'text-white bg-[rgb(6 8 83)]' : 'text-[rgb(6 8 83)] bg-gray-300'}`}>

                    <summary className="flex justify-between items-center py-5 cursor-pointer font-medium">
                        <span>What is React Router ?</span>

                        <span className="transition-transform duration-300 group-open:rotate-45 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                            </svg>
                        </span>

                    </summary>

                    <div className="pb-5 text-sm text-slate-500">
                        React Router is the standard, third-party library for managing navigation in React applications. It enables the creation of single-page applications (SPAs) that can switch between different components or views without requiring a full page reload, providing a smooth, multi-page experience.
                    </div>

                </details>
                <details className={`group border border-slate-400 rounded-md px-2 ${mode==='dark' ? 'text-white bg-[rgb(6 8 83)]' : 'text-[rgb(6 8 83)] bg-gray-300'}`}>

                    <summary className="flex justify-between items-center py-5 cursor-pointer font-medium">
                        <span>What is React.JS ?</span>

                        <span className="transition-transform duration-300 group-open:rotate-45 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                            </svg>
                        </span>

                    </summary>

                    <div className="pb-5 text-sm text-slate-500">
                       React.js is an open-source JavaScript library for building user interfaces (UIs) using a component-based architecture. Maintained by Meta and a large community of individual developers and companies, it is one of the most popular web technologies in use today.
                    </div>

                </details>

            </div>
            
        </div>
    )
}
