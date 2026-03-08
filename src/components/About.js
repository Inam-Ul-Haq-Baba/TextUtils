import React, { useState } from 'react'

export default function About({mode}) {

    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'rgb(6 8 83)'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = () =>{
        if(myStyle.color === 'white')
        {
            setMyStyle(
                {
                    color: 'rgb(6 8 83)',
                    backgroundColor: 'white'
                }
            )
            setBtnText("Enable Dark Mode")
        }
        else{
            setMyStyle(
                {
                    color: 'white',
                    backgroundColor: 'rgb(6 8 83)'
                }
            )
            setBtnText("Enable Light Mode")
        }
        
    }
    

    return (
        <div >
            <div className={` w-3/4 mx-auto p-5  ${mode==='dark' ? 'border border-white' : 'border border-black'} rounded-xl mt-6 mb-2`} >

                <details className="group border border-slate-400 rounded-md px-2" style={myStyle}>

                    <summary className="flex justify-between items-center py-5 cursor-pointer font-medium">
                        <span>What is Material Tailwind?</span>

                        <span className="transition-transform duration-300 group-open:rotate-45 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                            </svg>
                        </span>

                    </summary>

                    <div className="pb-5 text-sm text-slate-500">
                        Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
                    </div>

                </details>
                <details className="group border border-slate-400 rounded-md px-2" style={myStyle}>

                    <summary className="flex justify-between items-center py-5 cursor-pointer font-medium">
                        <span>What is Material Tailwind?</span>

                        <span className="transition-transform duration-300 group-open:rotate-45 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                            </svg>
                        </span>

                    </summary>

                    <div className="pb-5 text-sm text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero velit, suscipit vitae commodi ducimus nihil.
                    </div>

                </details>
                <details className="group border border-slate-400 rounded-md px-2" style={myStyle}>

                    <summary className="flex justify-between items-center py-5 cursor-pointer font-medium">
                        <span>What is Material Tailwind?</span>

                        <span className="transition-transform duration-300 group-open:rotate-45 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                            </svg>
                        </span>

                    </summary>

                    <div className="pb-5 text-sm text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repudiandae velit eligendi amet! Quo, unde provident cumque inventore sunt explicabo.
                    </div>

                </details>

            </div>
            <div className='text-center mb-7'>
                <button className="px-2 py-1 rounded-lg border border-white " style={myStyle} onClick={toggleStyle}>{btnText}</button>
            </div>
        </div>
    )
}
