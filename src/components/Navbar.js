import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar({
  title = "Stranger",
  aboutCompany = "Hey"
}) {
    return (
        <div>
            <nav className=' flex justify-between px-6  bg-yellow-300'>
                <p className='text-xl font-bold text-purple-800'>{title}</p>
                <ul className='flex justify-end gap-8 font-semibold py-1 '>
                    <li>Home</li>
                    <li>{aboutCompany}</li>
                    <li>contact</li>
                </ul>
            </nav>
        </div>
    )
}

Navbar.propTypes={
  title: PropTypes.string.isRequired,
  aboutCompany: PropTypes.string
}

// Navbar.defaultProps = {
//     title: 'Stranger',
//     aboutCompany: "Hey"
// };