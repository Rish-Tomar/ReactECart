import React ,{useState}from 'react'
import styles from '../styles/productcard.module.css'
import {connect} from 'react-redux'
import { addItemToCart } from '../actions/cartItems'
import { deleteProductFromProductsPage } from '../actions/products'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import {Link} from 'react-router-dom'

function ProductCard(props) {
    const {product}=props
    const[showProductDetails,setShowProductDetails]=useState(false)
    function handleClickToCart(){
        props.dispatch(addItemToCart(product))
        toast.success("Item Added To Cart", {autoClose:1500})
    }
    
    const onDeleteQuantity=()=>{
        props.dispatch(deleteProductFromProductsPage(product))
        toast.success('Product Deleted')
    }

    const handleShowDetails=()=>{
        setShowProductDetails(true)
    }

  return (
    <div className={styles.cardWrapper}>
        <div className={styles.imageDiv}>
            <img className ={styles.imageBox}src={product.image}/>
        </div>
        <div className={styles.descriptionDiv}>
           {product.title}<br/>
           <button><Link to={`/product-details/${product.id}`}>Show Details</Link></button>
            {/* <button><span onClick={handleShowDetails}>Show Details</span></button> */}
            {/* {showProductDetails? */}

                                {/* <div>
                                    <ul>{product.details.forEach((e)=>{
                                        {console.log('logg',e)}
                                        <li><span>'{e}'</span></li>
                                    })} 
                                    </ul>
                                </div> */}
                                {/* // :<>'dd'</>} */}
        </div>
        <div>
            Price {product.price}
            <button onClick={handleClickToCart}>ADD To Cart</button>
        </div>
        <img className={styles.image} src='https://cdn-icons-png.flaticon.com/512/3687/3687412.png'
                            onClick={()=>onDeleteQuantity()}
                            alt="Delete Icon"/>
        <ToastContainer autoClose={3000}/>
    </div>
  )
}

function mapStateToProps(store){
    return{
        store
    }
}
export default connect(mapStateToProps)(ProductCard)
