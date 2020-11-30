const initialState ={
    products:[],
    totalHarga: 0
}

const tokoReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload],
                totalHarga: state.totalHarga + (action.payload.price*action.payload.quantity)
            };
            case "DEL_PRODUCT":
            return {
                ...state,
                products: state.products.filter((product,index)=>index !== action.payload),
                totalHarga: state.totalHarga - (action.payload)
            }
        

    
        default:
            return state;
    }
}

export default tokoReducer;