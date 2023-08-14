import React, {useEffect, useReducer, useRef, useState} from 'react';
import BookablesList from "../BookablesList/BookablesList";
import BookableDetails from "../BookableDetails/BookableDetails";
import bookablesReducer from "../../reducers/bookablesReducer";
import getBookables from "../../utils/dao/getBookables";
import Error from "../../atoms/Error/Error";
import Spinner from "../../atoms/Spinner/Spinner";
import styles from './BookablesView.module.css'

const initialState = {
    error: false,
    loading: true,
    data: null
}

const BookablesView = () => {
    const [state, dispatch] = useReducer(bookablesReducer, null, () => initialState)
    const [group, setGroup] = useState("Kit")
    const [bookableId, setBookableId] = useState(0)
    const [hasDetails, setHasDetails] = useState(false)
    const nextButtonRef = useRef();
    const groups = state.data && [...new Set(state.data.bookables.map(b => b.group))]

    useEffect(() => {
        getBookables()
            .then(data => dispatch({type: "SET_DATA", payload: data}))
            .catch(err => dispatch({type: "SET_ERROR"}))
    }, [])
    const nextBookable = () => setBookableId(current => (current + 1) % (state.data.bookables.filter(b => b.group === group).length))
    const selectBookable = roomId => {
        setBookableId(roomId)
        nextButtonRef.current.focus()
    }
    const selectGroup = e => {
        setBookableId(0)
        setGroup(e.target.value)
    }
    const toggleDetails = () => setHasDetails(prev => !prev)

    const noData = state.error ? <Error/> : <Spinner text={"Loading Bookables"}/>
    return (
        state.data ?
            <div className={styles.container}>
                <BookablesList
                    bookables={state.data.bookables}
                    selectBookable={selectBookable}
                    selectGroup={selectGroup}
                    bookableId={bookableId}
                    groups={groups}
                    nextButtonRef={nextButtonRef}
                    nextBookable={nextBookable}
                    group={group}
                />
                <BookableDetails
                    bookables={state.data.bookables}
                    bookableId={bookableId}
                    hasDetails={hasDetails}
                    group={group}
                    sessions={state.data.sessions}
                    days={state.data.days}
                    toggleDetails={toggleDetails}/>
            </div> : noData
    );
};

export default BookablesView;
