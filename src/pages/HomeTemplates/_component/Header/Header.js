import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoNotificationsOutline, IoPersonOutline } from 'react-icons/io5'
import { BiSearchAlt } from 'react-icons/bi';

import { ReactComponent as Logo } from '../../../../assets/image/wanda.svg'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import './Header.css'
import { getListBook } from '../../../../redux/actions/ListBook';

export default function Header() {
    const dispatch = useDispatch()
    const [state, setState] = useState({ keyword: "" })


    return (
        <header>
            <div className='header-content'>
                <ul className='nav-tab xs:w-full lg:w-full xl:w-8/12'>
                    <li className='w-2/12'>
                        <NavLink to='/' onClick={() => dispatch(getListBook())}>
                            <Logo className='w-20 h-auto' />
                        </NavLink>
                    </li>

                    <li className='search-input w-8/12 flex items-center'>
                        <input type='text' placeholder='Search title, description...'
                            onChange={e => setState({ keyword: e.target.value })} />
                        <button type='submit' onClick={() => dispatch({ type: "SEARCH_BOOK", payload: state.keyword })}>
                            <BiSearchAlt />Search
                        </button>
                    </li>

                    <li className='w-2/12 xs:hidden lg:block'>
                        <ul className='nav-info'>
                            <li>
                                <IoNotificationsOutline style={{ fontSize: '20px' }} />
                                <span>Notification</span>
                            </li>
                            <li>
                                <AiOutlineShoppingCart style={{ fontSize: '20px' }} />
                                <span>Cart</span>
                            </li>
                            <li>
                                <IoPersonOutline style={{ fontSize: '20px' }} />
                                <span>Account</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    )
}
