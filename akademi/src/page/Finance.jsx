import React from 'react'

const Finance = () => {
    return (
        <div>
            <div className='w-full'>
                <div className='head flex w-full items-center justify-between'>
                    <div className='logo font-bold text-3xl m-5'>
                        Finance
                    </div>
                    <div>
                        <div className='searh-das flex gap-2 h-8 rounded-2xl m-5 border-1 items-center'>
                            <input
                                type="text"
                                placeholder='search here'
                                className='input-dasboard text-center p-1'
                            />
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className='finance'>
                    
                </div>


            </div>
        </div>
    )
}

export default Finance