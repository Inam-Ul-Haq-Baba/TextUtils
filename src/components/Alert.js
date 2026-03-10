import React from 'react'

export default function Alert({alert,hideAlert}) {    

    if(!alert) return null;
    return (
        <div className='relative'>
            <div className={`w-1/3 bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 flex items-start justify-between absolute right-1 ${alert ? 'block' :'hidden'}`}>

                <div className="flex items-start gap-3">

                    {/* <!-- Icon --> */}
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                        ✓
                    </div>

                    {/* <!-- Text --> */}
                    <div>
                        <h3 className="font-semibold">{alert.type}</h3>
                        <p className="text-sm text-green-700">
                            {alert.message}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}
