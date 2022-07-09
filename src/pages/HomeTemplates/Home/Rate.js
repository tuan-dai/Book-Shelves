import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function (props) {

    return (
        <div className='border-b'>
            <div className='p-3'>
                <h6 className='mb-3'>RATE</h6>
                <button className='flex items-center'>
                    <AiFillStar style={{ color: 'rgb(253, 216, 53)' }} />
                    <AiFillStar style={{ color: 'rgb(253, 216, 53)' }} />
                    <AiFillStar style={{ color: 'rgb(253, 216, 53)' }} />
                    <AiFillStar style={{ color: 'gray' }} />
                    <AiFillStar style={{ color: 'gray' }} />
                    <span className='text-sm ml-1'>from 3 stars</span>
                </button>
                <button className='flex items-center my-3'>
                    <AiFillStar style={{ color: 'rgb(253, 216, 53)' }} />
                    <AiFillStar style={{ color: 'rgb(253, 216, 53)' }} />
                    <AiFillStar style={{ color: 'rgb(253, 216, 53)' }} />
                    <AiFillStar style={{ color: 'rgb(253, 216, 53)' }} />
                    <AiFillStar style={{ color: 'gray' }} />
                    <span className='text-sm ml-1'>from 4 stars</span>
                </button>
                <button className='flex items-center'>
                    <AiFillStar style={{ color: 'rgb(253, 216, 53)' }} />
                    <AiFillStar style={{ color: 'rgb(253, 216, 53)' }} />
                    <AiFillStar style={{ color: 'rgb(253, 216, 53)' }} />
                    <AiFillStar style={{ color: 'rgb(253, 216, 53)' }} />
                    <AiFillStar style={{ color: 'rgb(253, 216, 53)' }} />
                    <span className='text-sm ml-1'>from 5 stars</span>
                </button>
            </div>
        </div>
    )
}
