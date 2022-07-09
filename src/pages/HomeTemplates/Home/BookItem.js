import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BookItem(props) {
    const { book } = props

    const renderListBook = () => {
        return book?.map(item => {
            return <div className='col-4 col-md-3 mb-4 book-wrapper'>
                <NavLink to={`/listBook/book/${item.id}`} className="book-item">
                    <div className='book-thumbnail'>
                        <img className='xs:w-24 xs:h-32 lg:w-36 lg:h-52 object-cover' src={item?.volumeInfo?.imageLinks?.thumbnail} alt="" />
                    </div>
                    <p className='xs:my-4 lg:my-2 text-sm h-16 text-left'>
                        {item.volumeInfo.title}
                    </p>
                    <p className='text-red-500 font-bold mb-0'>{item?.saleInfo?.listPrice?.amount.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                    <p className='text-sm line-through'>{item?.saleInfo?.retailPrice?.amount.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                </NavLink>
            </div>
        })
    }

    return (
        <div className='row'>
            {renderListBook()}
        </div>
    )
}
