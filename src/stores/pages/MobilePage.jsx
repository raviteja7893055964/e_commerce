import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function MobilePage() {
    const [SelecetedProduct, setSelecetedProduct] = useState([])
    const companyHandler = (company) => {
        if (SelecetedProduct.includes(company)) {
            setSelecetedProduct(SelecetedProduct.filter(item => {
                item != company
            }
            )
            )
        }
        else {
            setSelecetedProduct([company])
        }
    }
    const filteredPrducts = SelecetedProduct.length === 0 ?
        mobileData : mobileData.filter((eachMob) =>
            SelecetedProduct.includes(eachMob.company)
        )
    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {mobileData.map((phone) => {
                        return (
                            <div className='pro-input'>
                                <label htmlFor="" >
                                    <input type="checkbox"
                                        checked={SelecetedProduct.includes(phone.company)}
                                        onChange={() => { companyHandler(phone.company) }} />
                                </label>
                                {phone.company}
                            </div>
                        )
                    })}
                </div>
                <div className="pageSection">
                    {
                        filteredPrducts.map((item) => {
                            return (
                                <div>
                                    <Link to={`/mobilepage/${item.id}`}>
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

export default MobilePage