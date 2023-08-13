import {combineReducers} from "@reduxjs/toolkit";
import *  as contactReducer from "./contacts/contacts.slice"

const rootReducer = combineReducers({
    [contactReducer.contactFeature]: contactReducer.contactSlice.reducer
});
export default rootReducer;