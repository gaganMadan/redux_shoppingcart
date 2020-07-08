export const DECREASE = "DECREASE"
export const INCREASE = "INCREASE"
export const REMOVE = "REMOVE"

export const GET_TOTAL = "GET_TOTAL"
export const GET_AMOUNT = "GET_AMOUNT"
export const GET_TOTALS = "GET_TOTALS"
export const CLEAR_CART = "CLEAR_CART"

export const removeItem = (id) => {
  return { type: REMOVE, payload: {id}}
}

