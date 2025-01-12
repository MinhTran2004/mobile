const initialState = {
    dataCart: [],
    total: 0,
    coupon: {},
}

const dataCartReducer = (state = [], action: any) => {
    switch (action.type) {
        case 'SET': return {
            ...state,
            dataCart: action.payload,
        }
        case 'HIDEN': return {
            ...state,
            data: action.payload,
        }
        default: return state
    }
}

export default dataCartReducer;