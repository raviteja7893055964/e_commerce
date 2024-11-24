import React, { useState } from 'react'
import { fridgeData } from '../data/fridge'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function FridgePage() {
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
        fridgeData : fridgeData.filter((eachMob) =>
            selectedProduct.includes(eachMob.brand)
        )



    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {fridgeData.map((frid) => {
                        return (
                            <div className='pro-input'>
                                <label htmlFor="" >
                                    <input type="checkbox"
                                        checked={selectedProduct.includes(frid.brand)}
                                        onChange={() => { companyHandler(frid.brand) }}
                                    />
                                </label>
                                {frid.brand}
                            </div>
                        )
                    })}
                </div>

                <div className="pageSection">
                    {
                        filteredPrducts.map((item) => {
                            return (
                                <div>
                                    <Link to={`/fridge/${item.id}`}>
                                        <div className="pageImg">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </Link>
                                    <div className="proModel">
                                        {
                                            item.brand
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
            </div >
        </>


    )
}

export default FridgePage