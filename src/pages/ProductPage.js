import React from 'react'
import ProductCard from '../components/ProductCard'
import {connect} from 'react-redux'


function ProductPage(props) {
  var lengthProduct=props.store.products.length
  return (
    <div>
        {
            props.store.products.map((product)=>(
                <ProductCard product={product} key={product.id} size={lengthProduct}/>
            ))
        }
    </div>
  )
}

function mapStateToProps(store){
    return{
        store
    }
}
export default connect(mapStateToProps)(ProductPage)