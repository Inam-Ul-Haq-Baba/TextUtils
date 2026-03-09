import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar({
    title = "Stranger",
    aboutCompany = "about",
    mode,
    toggleMode
}) {
    return (
        <div>
            <nav className={`navbar flex justify-between px-6 py-2 ${mode === 'dark' ? 'bg-black text-white' : 'text-black bg-gray-300'}`}>
                <p className='text-2xl font-bold text-purple-800'>{title}</p>
                <ul className='flex justify-end gap-8 font-semibold py-1 '>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">{aboutCompany}</Link></li>
                    <li>contact</li>
                    <div className='flex text-xs items-center'>
                        <label className="inline-flex items-center cursor-pointer relative">

                            <input type="checkbox" onClick={toggleMode} className="sr-only peer " />

                            {/* Track */}
                            <div className="w-11 h-6 bg-gray-300 border border-white rounded-full peer-checked:bg-black transition-colors"></div>

                            {/* Circle */}
                            <div className="absolute left-[2px] top-[2px] w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>

                        </label>
                        {`Enable ${mode === 'dark' ? 'light' : 'dark'} Mode`}
                    </div>
                </ul>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutCompany: PropTypes.string
}