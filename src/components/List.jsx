import React from 'react'

function List({ arr }) {
    return (
        <div className='mt-2'>
            <ul className="ml-8 list-disc">
                {arr.map((element, index) => {
                    return (<li className="" key={index}>{element}</li>)
                }
                )}
            </ul>
        </div>
    )
}

export default List