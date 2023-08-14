export default function bookablesReducer(state, action){
    switch (action.type){
        case "SET_BOOKABLES":
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case "SELECT_BOOKABLE":
            return{
                ...state,
                bookableId: action.payload.id
            }
        case "NEXT_BOOKABLE":
            return {
                ...state,
                bookableId: (state.bookableId + 1) % (state.data.bookables.filter(b => b.group === state.group).length)
            }
        case "SELECT_GROUP":
            return {
                ...state,
                group: action.payload.value,
                bookableId: 0
            }
        case "SET_ERROR":
            return {
                ...state,
                error: true,
                isLoading: false
            }
        case "TOGGLE_DETAILS":
            return {
                ...state,
                hasDetails: !state.hasDetails
            }
        default:
            return state
    }
}
