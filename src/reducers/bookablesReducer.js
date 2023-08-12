export default function bookablesReducer(state, action){
    switch (action.type){
        case "SET_DATA":
            return{
                data: action.payload,
                loading: false,
                error: false
            }
        case "SET_ERROR":
            return {
                data: null,
                loading: false,
                error: true
            }
        default:
            return state
    }
}
