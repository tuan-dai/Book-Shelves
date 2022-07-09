import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Author(props) {
    const { author } = props
    const dispatch = useDispatch()

    const [state, setState] = useState({
        quantity: 5,
        visible: true
    })


    const renderAuthor = () => {
        return author?.slice(0, state.quantity).map(item => {
            return <button key={item.id} className='flex items-center gap-2 my-2 cursor-pointer'
                onClick={() => dispatch({
                    type: "AUTHOR",
                    payload: item.volumeInfo.authors
                })}>
                <input type="checkbox" />
                <span className='text-sm'>{item.volumeInfo.authors[0]}</span>
            </button>
        })
    }

    return (
        <div className='p-3'>
            <h6 className='mb-3'>AUTHOR</h6>
            {renderAuthor()}
            {state.visible
                ? <button className='text-blue-700 text-sm'
                    onClick={() => setState({
                        quantity: 10,
                        visible: false
                    })}>See more</button>
                : <button className='text-blue-700 text-sm' onClick={() => setState({
                    quantity: 5,
                    visible: true
                })}>Collapse</button>}
        </div>
    )
}
export default Author
