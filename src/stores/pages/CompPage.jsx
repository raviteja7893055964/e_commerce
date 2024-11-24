import React, { useState } from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const CompPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler =(company)=>{
        if(selectedProduct.includes(company)){
            setSelectedProduct(selectedProduct.filter(item=>{
             item != company
         }
     )
 )
     }
     else{
        setSelectedProduct([company])
     }
 }
 const filteredPrducts = selectedProduct.length===0? 
 computerData : computerData.filter((eachMob)=>
    selectedProduct.includes(eachMob.company)
 )

return (
<>
<Navbar />
<div className="fullpage">
<div className="pro-selected">
                {computerData.map((comp)=>{
                        return(
                            <div className='pro-input'>
                                <label htmlFor="" >
                                    <input type="checkbox" 
                                    checked={selectedProduct.includes(comp.company)}
                                    onChange={()=>{companyHandler(comp.company)}}
                                    />
                                </label>
                                {comp.company}
                            </div>
                        )
                })}
            </div>



<div className='pageSection'>
    {filteredPrducts.map((item)=>{
        return(
            <div>

            <Link to={`/computers/${item.id}`}>
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
    })}

 </div>
</div>
</>
  )
}

export default CompPage