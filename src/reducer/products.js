import {FETCH_PRODUCT,ADD_PRODUCT, REMOVE_PRODUCT_FROMARRAY} from '../actions/actionTypes'


export default function products (state =[],action)
{
    switch(action.type){
        case FETCH_PRODUCT:
            return action.data
        case ADD_PRODUCT:
            console.log('ADD_PRODUCT',action.data)
            state.push(action.data);
            return state
        case REMOVE_PRODUCT_FROMARRAY:
            state=removeProduct(state,action.data)
            return state;
        default: return state
    }
}

function removeProduct(state,data){
    var v=state.filter((ele)=>{
        return ele.id!==data.id
    })
    return v;    
}