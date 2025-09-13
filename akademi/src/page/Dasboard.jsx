import React, { useState } from 'react'
import ChartPerform from '../components/ChartPerform.jsx'
import ChartFinance from '../components/ChartFinance.jsx'
import DasboardRender from './render/DasboardRender.jsx'
const Dasboard = () => {
    return (
        <div className='dasboard-main flex w-full h-full'>
            <div className='w-full'>
                <div className='head flex w-full items-center justify-between'>
                    <div className='logo font-bold text-3xl m-5'>
                        Dasboard
                    </div>
                    <div className='searh-das flex gap-2 h-8 rounded-2xl m-5 border-1 items-center'>
                        <input
                            type="text"
                            placeholder='search here'
                            className='input-dasboard text-center p-1'
                        />
                    </div>
                </div>
                <div className='flex mb-20'>
                    <DasboardRender/>
                </div>
                <div className='chartCSS flex flex-col m-auto w-9/10 h-auto mb-20 rounded-xl'>
                    <div className='ds'>
                        <ChartPerform />
                    </div>

                </div>
                <div className=' flex gap-10 m-auto w-9/10 h-auto mb-20 rounded-xl justify-around'>
                    <div className='School-Finance-barChart rounded-xl w-4/10'>
                        <ChartFinance />
                    </div>
                    <div className='School-Finance-barChart rounded-xl w-4/10'>
                        <ChartFinance />
                    </div>
                </div>
                <div className='unpaidStudent flex flex-col'>

                </div>
            </div>
        </div>
    )
}

export default Dasboard