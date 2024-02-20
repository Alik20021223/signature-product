import { RECIPE_EDIT } from '../actions';
import { combineReducers } from 'redux'; 
import { RecipeReducer } from './post'
import { EditedReducer } from './edited';
import { PayloadAction } from "@reduxjs/toolkit";

const appReducer = combineReducers({
    recipes : RecipeReducer,
    edited: EditedReducer,
})

export const rootReducer = (state: any, action: PayloadAction<any>) => {
    switch(action.type) {
        case RECIPE_EDIT:
            return reduceEdit(state, action)
        default:
            return appReducer(state, action)
    }
}

const reduceEdit = (state, action) => {
    // debugger
    const {items} = state.posts
    const post = items.find((o) => o.id === action.payload.id);
    if (post === undefined) {
        return state
    }

    return {
        ...state,
        edited: post,
    }
}


