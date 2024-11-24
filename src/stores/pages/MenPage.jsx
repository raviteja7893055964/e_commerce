import React, { useState } from 'react'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function MenPage() {
    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler = (brand) => {
        if (selectedProduct.includes(brand)) {
            setSelectedProduct(selectedProduct.filter(item => {
                item != brand
            }
            )
            )
        }
        else {
            setSelectedProduct([brand])
        }
    }
    const filteredPrducts = selectedProduct.length === 0 ?
        menData : menData.filter((eachMob) =>
            selectedProduct.includes(eachMob.brand)
        )


    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {menData.map((men) => {
                        return (
                            <div className='pro-input'>
                                <label htmlFor="" >
                                    <input type="checkbox"
                                        checked={selectedProduct.includes(men.brand)}
                                        onChange={() => { companyHandler(men.brand) }}
                                    />
                                </label>
                                {men.brand}
                            </div>
                        )
                    })}
                </div>

                <div className="pageSection">
                    {
                        filteredPrducts.map((item) => {
                            return (
                                <div>
                                    <Link to={`/men/${item.id}`}>
                                        <div className="pageImg">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </Link>
                                    <div className="pageImg">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="proModel">
                                        {
                                            item.company
                                        },
                                        {
                                            item.model
                                        }
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>


    )
}

export default MenPage