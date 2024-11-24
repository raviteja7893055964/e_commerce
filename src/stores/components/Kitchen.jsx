import React from 'react'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'


const Kitchen = () => {
    const firstFiveImages = kitchenData.slice(0, 5)
    return (
        <>
            <div className="proTitle">
                <h2>Kitchen</h2>
            </div>

            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <Link to={`/kitchen/${item.id}`}>
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

export default Kitchen