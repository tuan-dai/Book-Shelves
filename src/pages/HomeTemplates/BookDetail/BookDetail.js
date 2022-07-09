import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBookDetail } from '../../../redux/actions/BookDetail'
import { Breadcrumb } from 'antd';

import './BookDetail.css'
import Info from './Info';
import Description from './Description';
import Review from './Review';
import Loading from '../../_components/Loading/Loading';

export default function BookDetail(props) {
    const { id } = props.match.params
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBookDetail(id))
    }, [])
    const { bookDetail, loading } = useSelector(state => state.BookDetailReducer)
    const title = bookDetail?.volumeInfo?.title


    return (
        <section className='xs:w-full lg:w-full xl:w-8/12 mx-auto my-3'>
            {loading ? <Loading /> : ""}
            <Breadcrumb separator=">">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>{title?.length > 50 ? title?.substr(0, 30) + "..." : title}</Breadcrumb.Item>
            </Breadcrumb>

            <Review book={bookDetail} />
            <Info book={bookDetail} />
            <Description book={bookDetail} />
        </section>
    )
}
