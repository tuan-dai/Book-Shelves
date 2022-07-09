import React from 'react'
import moment from 'moment'

export default function Info(props) {
    const { book } = props
    let date = book?.volumeInfo?.publishedDate

    return (
        <div className='book-content'>
            <h5 className='font-bold mb-3'>Info</h5>
            <div className='flex'>
                {/* title */}
                <ul className='info-title w-2/12'>
                    <li>Etag</li>
                    <li>Publisher</li>
                    <li>Published Date</li>
                    <li>Print Type</li>
                    <li>Page Count</li>
                    <li>Country</li>
                </ul>

                {/* content */}
                <ul className='info-content w-10/12'>
                    <li>{book?.etag}</li>
                    <li>{book?.volumeInfo?.publisher}</li>
                    <li>{moment(date).format('DD-MM-YYYY')}</li>
                    <li className='text-red-500'>{book?.volumeInfo?.printType}</li>
                    <li>{book?.volumeInfo?.pageCount}</li>
                    <li>{book?.saleInfo?.country}</li>
                </ul>
            </div>
        </div>
    )
}
