import React, {useEffect, useReducer} from 'react';
import BookablesList from "../BookablesList/BookablesList";
import BookableDetails from "../BookableDetails/BookableDetails";
import bookablesReducer from "../../reducers/bookablesReducer";
import getBookables from "../../utils/dao/getBookables";
import Error from "../../atoms/Error/Error";
import Spinner from "../../atoms/Spinner/Spinner";
import styles from './BookablesView.module.css'

const initialState = {
    bookableId: 0,
    group: "Kit",
    hasDetails: false,
    data: null,
    isLoading: true,
    error: false
}

const BookablesView = () => {
    const [state, dispatch] = useReducer(bookablesReducer, null, () => initialState)

    useEffect(() => {
        getBookables()
            .then(data => dispatch({type: "SET_BOOKABLES", payload: data}))
            .catch(err => dispatch({type: "SET_ERROR"}))
    }, [])

    const noData = state.error ? <Error/> : <Spinner text={"Loading Bookables"}/>
    return (
        state.data ?
            <div className={styles.container}>
                <BookablesList
                    state={state}
                    dispatch={dispatch}
                />
                <BookableDetails
                    state={state}
                    dispatch={dispatch}
                />
            </div> : noData
    );
};

export default BookablesView;
