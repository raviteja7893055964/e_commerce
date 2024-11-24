import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'
function Mobiles() {
    const firstFiveImages = mobileData.slice(0, 5)
    return (

        <>

            <div className="proTitle">
                <h2>Mobiles</h2>
            </div>
            <div className="proSection">
                {
                    firstFiveImages.map((item) => {
                        return (
                            <Link to={`/mobilepage/${item.id}`}>
                                <div className="imgBox">
                                    <img className='proImage' src={item.image} alt="" />
                                </div>
                            </Link>

                        )
                    }
                    )

                }
            </div>
        </>
    )
}

export default Mobiles