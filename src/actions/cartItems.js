import {ADD_PRODUCT_TO_CART,DECREASE_ITEM_COUNT,DELETE_PRODUCT_FROM_CART} from './actionTypes'

export function addItemToCart(product){
    return{
        type:ADD_PRODUCT_TO_CART,
        product
    }
}

export function decreaseItemCount(product){
    console.log(product.count)
    return{
        type:DECREASE_ITEM_COUNT,
        product
    }
}

export function deleteProductFromCart(product){
    return{
        type:DELETE_PRODUCT_FROM_CART,
        product
    }
}
