import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { teamManagerRootReducer } from "../reducers/teamManagerRootReducer";

export const store = configureStore({
    reducer: combineReducers({
        domain: teamManagerRootReducer
    })
});