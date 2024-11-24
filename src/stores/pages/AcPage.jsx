import React, { useState } from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function AcPage() {
    const [SelecetedProduct, setSelecetedProduct] = useState([])

    const companyHandler =(company)=>{
        console.log(company);
        
        if(SelecetedProduct.includes(company)){
         setSelecetedProduct(SelecetedProduct.filter(item=>{
             item != company
         }
     )
 )
     }
     else{
         setSelecetedProduct([company])
     }
 }

 const filteredPrducts = SelecetedProduct.length===0? 
 acData : acData.filter((eachMob)=>
    SelecetedProduct.includes(eachMob.company)
)

  return (
    <>
     <Navbar/>
    <div className="fullpage">
        <div className="pro-selected">
                {acData.map((ac)=>{
                        return(
                            <div className='pro-input'>
                                <label htmlFor="" >
                                    <input type="checkbox" 
                                    checked={SelecetedProduct.includes(ac.company)}
                                    onChange={()=>{
                                        companyHandler(ac.company)
                                    }}
                                    />
                                </label>
                                {ac.company}
                            </div>
                        )
                })}
            </div>
            <div className="pageSection">
        {
            filteredPrducts.map((item)=>{
                return(
                    <div>
                        <Link to={`/acpage/${item.id}`}>
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

export default AcPage