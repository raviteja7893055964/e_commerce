import React, { useState } from 'react'
import { furnitureData } from '../data/furniture'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function FurniturePage() {
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
        furnitureData : furnitureData.filter((eachMob) =>
            selectedProduct.includes(eachMob.brand)
        )



    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {furnitureData.map((furniture) => {
                        return (
                            <div className='pro-input'>
                                <label htmlFor="" >
                                    <input type="checkbox"
                                        checked={selectedProduct.includes(furniture.brand)}
                                        onChange={() => { companyHandler(furniture.brand) }}
                                    />
                                </label>
                                {furniture.brand}
                            </div>
                        )
                    })}
                </div>

                <div className='pageSection'>
                    {filteredPrducts.map((item) => {
                        return (
                            <div>

                                <Link to={`/furniture/${item.id}`}>
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
                    })}

                </div>

                <div className='pageSection'>
                    {filteredPrducts.map((item) => {
                        return (
                            <div>

                                <Link to={`/furniture/${item.id}`}>
                                    <div className="pageImg">
                                        <img src={item.image} alt="" />
                                    </div>
                                </Link>
                                <div className="proModel">
                                    {
                                        item.model
                                    },
                                    {
                                        item.model
                                    }
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>


    )
}

export default FurniturePage