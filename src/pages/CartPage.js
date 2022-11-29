import React, { useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { calculateTotal } from '../actions/cartTotal'
import CartPageItem from '../components/CartPageItem'
import {Link} from 'react-router-dom'
import styles from '../styles/cartpage.module.css'
import { toast,ToastContainer,ToastContainerProps } from 'react-toastify'

function CartPage(props) {
    
    const {cartItems,cartTotal}=props.store
    // const [cartProduct,setCartProduct]=useState(props.store.cartItems)
    const [cartT,setCartT]=useState(0)
    const showEmptyCartMessage=()=>{
        toast.warn('Cart is Empty Go to Product PAge')
        return (
            <div>
                <div>CART IS EMPTY</div> 
                <Link to ='/product'>Go To Products Page</Link>
            </div>
        )               
    }


    const showCartDetails=()=>{
    return(
        <>
            {cartItems.map((item)=>(<CartPageItem item={item} key={item.id}/>))}
            <div className={styles.cartTotalDiv}>TOTAL Amount : Rs. {cartTotal}{showTotal()}</div>
        </>   
    )
    }

    function showTotal(){
        props.dispatch(calculateTotal(cartItems))
    }


{/*==========  MAIN RENDER METHOD  ========== */}
  return ( 
    <div>
        {
            cartItems.length<1?showEmptyCartMessage():showCartDetails()
        }
        <ToastContainer  position={toast.POSITION.TOP_CENTER}/>
    </div>
  )
}

function mapStateToProps(store){
    return{
        store
    }
}
export default connect(mapStateToProps)(CartPage)

