import React from 'react'
import CardFood from '../card/CardFood'

const Food = () => {
    return (
        <div>
            <div className='w-full'>
                <div className='head flex w-full items-center justify-between'>
                    <div className='logo font-bold text-3xl m-5'>
                        Food
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
                    <div>

                    </div>
                </div>
                <div className='foodMenu flex flex-col'>
                    <div>
                        FOOD MENU
                    </div>
                    <div className='foddList'>
                        <CardFood></CardFood>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Food