import React,{useState} from 'react'
import styles from '../styles/productdetailspage.module.css'
import {Link, useLocation,useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import { addItemToCart } from '../actions/cartItems'
import { toast,ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function ProductDetailsPage(props) {
    // const location= useLocation()
    const params =useParams()
    const {products}=props.store
    const id=params.id
    const [renderItem,setRenderItem] =useState('')
    const [detailsArray,setDetailsArray]=useState([])
    const[addButton,setaddButton]=useState(true)
    // console.log('props', props.store,id,renderItem.details)

    React.useEffect(()=>{
        // console.log('from Location',products,params.id)
        setRenderItem(products.find((ele)=>{
          console.log(ele)
          return ele.id==id
        }))
        setDetailsArray(renderItem.details)
        console.log('item set',renderItem,detailsArray)
    },[renderItem,detailsArray])

    function handleClickToCart(){
      props.dispatch(addItemToCart(renderItem))
      toast.success("Item Added To Cart", {autoClose:1500})
      setaddButton(false)
  }

  return (
    <div className={styles.outerDiv}>
        <div className={styles.imageAndPriceDiv}>
          <div className={styles.imageDiv}>
            <img className={styles.imageTag}src={renderItem.image}/>
          </div>
          <div className={styles.priceDiv}>
            <span>Price: Rs. {renderItem.price}</span>
          </div>
        </div>
        <div className={styles.descriptionAndDetails}>
          <div className={styles.priceAndRating}>
            {/* name */}
            <span>{renderItem.title}</span>
            <p>{renderItem.rating}</p>
          </div>
          <div>
            {/* details */}
            <span>Product Details and Specifications</span>
            <ul>{
                  !detailsArray?<></>:
                  <>{detailsArray.map((ele)=>(<li key={detailsArray.indexOf(ele)}>{ele}</li>))}</>
                }</ul>
          </div>
          <div>
            {/* add to cart option */}
            {
              addButton?
              <button className={styles.addToCart} onClick={handleClickToCart}>Add to Cart</button>
              :
              <Link to='/cart' className={styles.addToCart}>Go to Cart</Link>
               
            }
          </div>

        </div>
        
   <ToastContainer/>
    </div>
  )
}

function mapStateToProps(store){
  return{
      store
  }
}
export default connect(mapStateToProps)(ProductDetailsPage)