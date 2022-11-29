import { FETCH_PRODUCT,ADD_PRODUCT, REMOVE_PRODUCT_FROMARRAY } from "./actionTypes"

const URL ='https://my-json-server.typicode.com/Rish-Tomar/ProductJsonServer/'

export function fetchProducts(){
    return(dispatch)=>{
        fetch(`${URL}products`)
        .then(res=>{
            return res.json()
        }).then(data=>{
            dispatch(productAddToStore(data))
        })
    }
}

export function createProduct(details){
    return (dispatch)=>{
        fetch(`${URL}products`,{
            method:'POST',
            body:JSON.stringify(details),
            headers:
            {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(res=>{return res.json()})
        .then(data=>{
            dispatch(productAddandFetch(data))
        })
    }
}

export function deleteProductFromProductsPage(product){
    return (dispatch)=>{
        fetch(`${URL}products/${product.id}`,{
            method:'DELETE',
            body:JSON.stringify(product),
            headers:
            {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(res=>{return res.json()})
        .then(data=>{
            console.log(data)
            dispatch(removeProductFromProductArray(product))
        })

    }
}

function productAddToStore(data){
    return{
        type:FETCH_PRODUCT,
        data
    }
}

function productAddandFetch(data){
    return{
        type:ADD_PRODUCT,
        data
    }
}
function removeProductFromProductArray(data){
    return{
        type:REMOVE_PRODUCT_FROMARRAY ,
        data
    }
}