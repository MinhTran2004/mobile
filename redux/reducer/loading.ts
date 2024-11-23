const initialState = {
    loading: false
}

const loadingReducer = (state = initialState, action:any) => {
    switch(action.type){
        case 'SHOW': return {
            ...state,
            loading: action.payload,
        }
        case 'HIDEN': return {
            ...state,
            loading: action.payload,
        }
        default: return state
    }
}

export default loadingReducer;