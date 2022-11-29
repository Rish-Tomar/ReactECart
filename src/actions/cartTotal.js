import { CALCULATE_TOTAL, DECREASE_TOTAL, INCREASE_TOTAL,REMOVE_DELETED_COST_FROM_TOTAL} from "./actionTypes"

export function calculateTotal(product){
    return{
        type:CALCULATE_TOTAL,
        product
    }
}

export function changeTotalIncrease(newAddedCost){
    return{
        type:INCREASE_TOTAL,
        newAddedCost
    }
}

export function changeTotalDecrease(newDeletedCost){
    return{
        type:DECREASE_TOTAL,
        newDeletedCost
    }
}
export function changeTotalRemovedItem(removedCost){
    return{
        type:REMOVE_DELETED_COST_FROM_TOTAL,
        removedCost
    }
}