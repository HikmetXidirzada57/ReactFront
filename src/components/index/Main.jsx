
import React from 'react'
import InputSearch from '../layout/InputSearch'
import OrderList from '../OrderList/OrderList'
const Main = () => {
  return (
    <div className='row'>
      <div className="col-lg-6">
      <label style={{color:"red"}} htmlFor="text">Asağıdan məhsul seçimini edin</label>
      <InputSearch/>
      </div>
      <div className="col-lg-6">
        <OrderList/>
      </div>
     
    </div>
  )
}

export default Main