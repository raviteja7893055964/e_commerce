import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'


const Watch = () => {

    const firstFiveImages = watchData.slice(0, 5)

    return (
        <>
            <h2>Watches</h2>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <Link to={`/watch/${item.id}`}>
                                <div className='imgBox'>

                                    <img className='proImage' src={item.image} alt="" />

                                </div>
                            </Link>

                        )
                    })
                }
            </div>

        </>
    )
}

export default Watch