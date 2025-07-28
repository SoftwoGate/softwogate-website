import React from 'react'

export const Statesbox = () => {
    return (
        <div className=' bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
    xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[90%] sm:w-[80%] mx-auto text-center'>
            <div>
                <h1 className=' text-2xl font-bold text-blue-950'>50+</h1>
                <h1>PC Softwares</h1>
            </div>
            <div>
                <h1 className=' text-2xl font-bold text-blue-950'>10+</h1>
                <h1>Websites</h1>
            </div>
            <div>
                <h1 className=' text-2xl font-bold text-blue-950'>5+</h1>
                <h1>Mobile Apps</h1>
            </div>
            <div>
                <h1 className=' text-2xl font-bold text-blue-950'>100+</h1>
                <h1>IT Solutions</h1>
            </div>
        </div>
    )
}
