import React,{useState} from 'react'
import styles from '../styles/AddProduct.module.css'
import {connect} from 'react-redux'
import { createProduct, fetchProducts } from '../actions/products'

function AddProduct(props) {
const [title,setTitle] = useState()
const [details,setDetails] = useState()
const [price,setPrice] = useState()
const [rating,setRating] = useState()
const [imageLink,setImageLink] = useState()
const id = props.store.products.length+1

const handleSubmit=()=>{

    if(!(title&&details&&price&&rating&&imageLink)){
        console.log('please enter all your values')
        alert('please enter all your values')
        return
    }
    if(rating<0||rating>5){
        alert('Please Enter Rating between 0 to 5')
        return
    }
    props.dispatch(createProduct({id,title,details,price,rating,image:imageLink}))
  }

{/*==========  MAIN RENDER METHOD  ========== */}
  return (
    <div className={styles.AddProductWrapper}>
        Add Product
        <span>Product Name</span>
        <input className={styles.inputBox} type='text' placeholder='Product Title' onChange={(e)=>setTitle(e.target.value)} />
        <span>Description</span>
        <input className={styles.inputBox} type='text' placeholder='Description' onChange={(e)=>setDetails(e.target.value)} />
        <span>Price</span>
        <input className={styles.inputBox} type='number' placeholder='Price' onChange={(e)=>setPrice(e.target.value)} />
        <span>Rating</span>
        <input className={styles.inputBox} type='number' placeholder='Rating' onChange={(e)=>setRating(e.target.value)} />
        <span>Image Link</span>
        <input className={styles.inputBox} type='text' placeholder='Image' onChange={(e)=>setImageLink(e.target.value)} />
        <button className={styles.button} onClick={handleSubmit}>ADD</button>
    </div>
  )
}

function mapStateToProps(store){
    return{
        store
    }
}
export default connect(mapStateToProps)(AddProduct)