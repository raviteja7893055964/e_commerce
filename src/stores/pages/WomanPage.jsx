import React, { useState } from 'react'
import { womanData } from '../data/woman'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function WomanPage() {
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
        womanData : womanData.filter((eachMob) =>
            selectedProduct.includes(eachMob.brand)
        )


    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {womanData.map((comp) => {
                        return (
                            <div className='pro-input'>
                                <label htmlFor="" >
                                    <input type="checkbox"
                                        checked={selectedProduct.includes(comp.brand)}
                                        onChange={() => { companyHandler(comp.brand) }}
                                    />
                                </label>
                                {comp.brand}
                            </div>
                        )
                    })}
                </div>

                <div className="pageSection">
                    {
                        filteredPrducts.map((item) => {
                            return (
                                <div>
                                    <Link to={`/woman/${item.id}`}>
                                        <div className="pageImg">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </Link>

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

export default WomanPage