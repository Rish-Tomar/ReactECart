import { ADD_PRODUCT_TO_CART, CALCULATE_TOTAL, DECREASE_ITEM_COUNT, DELETE_PRODUCT_FROM_CART } from '../actions/actionTypes'


export default function cartItems (state =[],action)
{
    switch(action.type){
        case ADD_PRODUCT_TO_CART:
            handleAddition(state,action.product)
            return state;
        case DECREASE_ITEM_COUNT:
            handleDecrease(state,action.product) 
            return state;
        case DELETE_PRODUCT_FROM_CART:
            state=handleDelete(state,action.product)
            return state
        default: return state
    }
}

function handleAddition(state,product){
    //if state is empty add first item or add thatitem first time
    console.log('state',state)
    var item =state.find((item)=>{
        return item.id===product.id
    })
    //if no item exists then add item for first time
    if(!item){
        product['count']=1;
        state.push(product)
        return;
    }
    //if item exists then find its index and increase count
    const index=state.indexOf(item)
    state[index].count+=1
}

function handleDecrease(state,product){
    var item =state.find((item)=>{
        return item.id===product.id
    })
    if(item &&item['count']>1){
        item['count']-=1
        return
    }
}


function handleDelete(state,item){
    var arr=state.filter((ele)=>{
        return ele.id!==item.id
    })
    console.log(arr)
    return arr;
}
