import React from 'react'
import Navbar from './_components/Navbar'

const Provider = ({ children }) => {
    return (
        <div>
            <Navbar/>
            <div className='mt-20'>  
                {children}
                </div>
            </div>
    )
}

export default Provider