import { INCREASE_TOTAL,DECREASE_TOTAL,CALCULATE_TOTAL, REMOVE_DELETED_COST_FROM_TOTAL} from '../actions/actionTypes'



export default function cartTotal (state =0,action)
{
    switch(action.type){
        case CALCULATE_TOTAL:
            var c= handleCalculationForTotal(state,action.product)
            state=c
            return state
        case INCREASE_TOTAL:
            c= handleIncreaseTotal(state,action.newAddedCost)
            state=c
            return state
        case DECREASE_TOTAL:
            state=state-action.newDeletedCost;
            return state;
        case REMOVE_DELETED_COST_FROM_TOTAL:
            console.log(state,action.removedCost)
            state=state-action.removedCost;
            return state
    default :return state;    
    }
}

function handleCalculationForTotal(state,products){
    var total=0
    products.forEach((ele)=>{
        total+=ele.count*ele.price
    })
    return total;
}

function handleIncreaseTotal(state,cost){
    return state+cost;
}