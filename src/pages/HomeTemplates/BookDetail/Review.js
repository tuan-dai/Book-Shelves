import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Review(props) {
    const { book } = props

    const dispatch = useDispatch()
    const { amount } = useSelector(state => state.BookDetailReducer)
    let btnDisable = amount == 1 ? true : false

    return (
        <div className='book-content row py-4'>
            <div className='col-md-12 col-lg-4 flex justify-center items-center'>
                <img className='img-thumbnail' src={book?.volumeInfo?.imageLinks?.thumbnail} alt="" />
            </div>

            <div className='col-md-12 col-lg-8 book-detail'>
                <h4 className='xs:mt-4 lg:mt-0 mb-3'>{book?.volumeInfo?.title}</h4>
                <div className='row book-detail-publisher'>
                    <div className='col-lg-6'>Publisher: <b style={{ color: "rgb(13, 92, 182)" }}>{book?.volumeInfo?.publisher}</b></div>
                    <div className='col-lg-6 my-1'>Author: <b>{book?.volumeInfo?.authors}</b></div>
                    <div className='col-lg-6'>Print Type: <b>{book?.volumeInfo?.printType}</b></div>
                    <div className='col-lg-6'>Categories: <b>{book?.volumeInfo?.categories?.toString().substr(0, 30) + "..."}</b></div>
                </div>

                <div className='flex items-center gap-3 my-4'>
                    <span className='text-red-700 text-3xl font-bold'>{book?.saleInfo?.listPrice?.amount.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                    <span className='line-through'>{book?.saleInfo?.retailPrice?.amount}</span>
                </div>
                <div className='flex gap-16 items-center'>
                    <span className='font-semibold'>Amount:</span>
                    <span className='border rounded-md gap-4 px-3 py-0.5'>
                        <button disabled={btnDisable} onClick={() => dispatch({
                            type: "AMOUNT", status: false
                        })}>-</button>
                        <span className='mx-4'>{amount}</span>
                        <button onClick={() => dispatch({
                            type: "AMOUNT", status: true
                        })}>+</button>
                    </span>
                </div>
                <div className='btn-buy'>
                    <a href="/">Add Cart</a>
                    <a href={`/${book?.volumeInfo.infoLink}`}>Buy</a>
                </div>
            </div>
        </div>
    )
}
