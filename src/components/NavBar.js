import React, { useEffect, useState } from 'react'
import cartImage from '../utils/pngegg.png'
import styles from '../styles/navbar.module.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


function NavBar(props) {
  var {cartList}=props
  let count=0;
  cartList.map((e)=>{
    count = count + e.count
})    
  
  return (
    <div className={styles.navbarWrapper}>
        <div >
          <Link to='/'>
            <img className={styles.navbarImage} src={cartImage}/>
          </Link>
        </div>
        <div className={styles.linkOptions}><Link to='/product'><span className={styles.text}>PRODUCTS</span></Link></div>
        <div className={styles.linkOptions}><Link to='/add-product'><span className={styles.text}>ADD PRODUCT</span></Link></div>
        <div className={styles.cartLinkOptions}>
              <Link to='/cart'><span className={styles.text}>CART</span></Link>
              {
                count<1?<div></div>:
                <div className={styles.cartCount}><span>{count}</span></div>
              }
        </div>
    </div>
  )
}

function mapStateToProps(store){
  return{
      store
  }
}
export default connect(mapStateToProps)(NavBar)
