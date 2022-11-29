import React, { useState } from 'react'
import styles from '../styles/cartpage.module.css'
import {connect} from 'react-redux'
import { addItemToCart, decreaseItemCount, deleteProductFromCart } from '../actions/cartItems'
import {changeTotalDecrease, changeTotalIncrease, changeTotalRemovedItem} from '../actions/cartTotal'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function CartPageItem(props) {
    const {item}=props
    const [itemCount,setItemCount]=useState(item.count)
    const [showCard,setShowCard]=useState(true)

    function onIncreaseQuantity(){
        props.dispatch(addItemToCart(item))
        setItemCount(props.item.count)
        props.dispatch(changeTotalIncrease(item.price))
        toast.success(`${item.title} units increased`)
    }
    function onDecreaseQuantity(){
        console.log(itemCount,props.item.count)
        if(itemCount==1){
            alert("Your Item Will Be deleted from Cart")
            onDeleteQuantity()
            setItemCount(props.item.count) //this fetches the changed value from props
            return
        }
        props.dispatch(decreaseItemCount(item))
        setItemCount(props.item.count)
        props.dispatch(changeTotalDecrease(item.price))
        toast.warn(`${item.title} units decreased`)
    }
    function onDeleteQuantity(){
        handleChangeInTotal(item.count*item.price)
        props.dispatch(deleteProductFromCart(item))
        setItemCount(0)        
        setShowCard(false)   
        toast.warn('Item Removed From Cart')   
    }
    function handleChangeInTotal(cost){
        props.dispatch(changeTotalRemovedItem(item.count*item.price))
    }

    function renderCard(){
        return(
            <div className={styles.cartWrapper}>
                <div className={styles.titleDivWrapper}>
                    <div className={styles.imageDiv}>
                        <img className={styles.productImage} src={item.image}/>
                    </div>
                    <div className={styles.titleAndUnits}>
                        <span className={styles.itemTitle}>{item.title}</span>
                        <p>Units : {itemCount}</p>
                    </div>
                </div>
                <div className={styles.priceAndOptionsDiv}>
                    <div>
                    <span>ITEM PRICE</span> Rs. {item.price}
                    </div>
                    <div>
                    <p><b> Product Total</b> =<i><b> Rs. {item.price*item.count}</b></i></p>
                    </div>
                    <div className={styles.cartItemOptions}>
                        <img className={styles.image} src='https://cdn-icons-png.flaticon.com/512/2430/2430752.png'
                            onClick={()=>onIncreaseQuantity()}
                            alt="Increase Icon"/>
                        <img className={styles.image} src='https://cdn-icons-png.flaticon.com/512/8189/8189331.png'
                            onClick={()=>onDecreaseQuantity()}
                            alt="Decrease Icon"/>
                        <img className={styles.image} src='https://cdn-icons-png.flaticon.com/512/3687/3687412.png'
                            onClick={()=>onDeleteQuantity()}
                            alt="Delete Icon"/>
                    </div> 
                </div> 
                <ToastContainer autoClose={1500} position={toast.POSITION.TOP_CENTER}/>      
            </div>  
        )
    }


    return(
        <>{showCard ? renderCard()    
                    : <div></div>
          }
        </>  
  )
}
function mapStateToProps(store){
    return{
        store
    }
}
export default connect(mapStateToProps)(CartPageItem)

