import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListBook } from '../../../redux/actions/ListBook'
import Loading from '../../_components/Loading/Loading'
import Author from './Author'
import Rate from './Rate'


import './Home.css'
import { NavLink } from 'react-router-dom'
import BookItem from './BookItem'
import Categories from './Categories'



export default function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListBook())
    }, [])
    const { listBook, loading } = useSelector(state => state.ListBookReducer)
    console.log(listBook)

    return (
        <section className='xs:w-full lg:w-full xl:w-8/12 mx-auto my-4 bg-white rounded-sm'>
            {loading ? <Loading /> : ""}
            <div className='flex'>
                {/* FILTER */}
                <div className='xs:hidden lg:block lg:w-3/12 border-r'>
                    <Categories />
                    <Rate />
                    <Author author={listBook} />
                </div>

                {/* LIST BOOK */}
                <div className='p-3 xs:w-full lg:w-9/12'>
                    <h5>WANDA BOOKSTORE</h5>
                    <ul className='tab-list'>
                        <li>
                            <NavLink to="#" activeClassName='tab-content active'>Common</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" activeClassName='tab-content'>Best Selling</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" activeClassName='tab-content'>Low Price</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" activeClassName='tab-content'>High Price</NavLink>
                        </li>
                    </ul>
                    <BookItem book={listBook} />
                </div>
            </div>
        </section>
    )
}
