import React from 'react'

export default function Alert({alert,hideAlert}) {    

    if(!alert) return null;
    return (
        <div>
            <div className={`max-w-xl mx-auto bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 flex items-start justify-between ${alert ? 'block' :'hidden'}`}>

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

                        {/* <!-- Actions --> */}
                        <div className="mt-2 flex gap-4 text-sm font-medium">
                            <button className="text-green-900 hover:underline">View status</button>
                            <button className="text-green-900 hover:underline" onClick={hideAlert}>Dismiss</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
