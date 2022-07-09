import React, { useState } from 'react'
import parse from 'html-react-parser';

export default function Description(props) {
    const { book } = props
    let content = book?.volumeInfo.description
    const [state, setState] = useState({ length: 700, visible: true })
    return (
        <div className='book-content'>
            <h5 className='font-bold mb-3'>Description</h5>
            <p>{parse(`${content?.substr(0, state.length)}`)}</p>
            <div className='flex items-center justify-center'>
                {state.visible
                    ? <button className='btn-more' onClick={() => setState(
                        {
                            length: content.length,
                            visible: false
                        })}>View More</button>
                    : <button className='btn-more' onClick={() => setState(
                        {
                            length: 700,
                            visible: true
                        })}>Collapse</button>
                }
            </div>
        </div>
    )
}
