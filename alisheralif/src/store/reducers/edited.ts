import {
  RECIPE_EDIT_CHANGE,
  RECIPE_EDIT_CANCEL,
  RECIPE_SAVE_SUCCESS,
  RECIPE_SAVE_FAIL,
  RECIPE_SAVE_REQUEST,
} from "../actions";
import { Recipe } from "./post";
import { PayloadAction } from "@reduxjs/toolkit";

const empty: Recipe = {
  id: 0,
  title: "",
  description: "",
  timeCook: "",
  listProduct: "",
  avatar: "",
};

export interface RecipeEditState {
  data: Recipe;
  loading: boolean;
  error: null | string;
}

export const initialState: RecipeEditState = {
  data: empty,
  loading: false,
  error: null,
};

export const EditedReducer = (
  state = initialState,
  action: PayloadAction<any>
) => {
  switch (action.type) {
    case RECIPE_EDIT_CHANGE:
      return reduceChange(state, action);
    case RECIPE_EDIT_CANCEL:
      return reduceCancel(state, action);
    case RECIPE_SAVE_SUCCESS:
      return reduceRecipeSaveSuccess(state, action);
    case RECIPE_SAVE_REQUEST:
      return reduceRecipeSaveRequest(state, action);
    case RECIPE_SAVE_FAIL:
      return reduceRecipeSaveFail(state, action);
    default:
      return state;
  }
};

const reduceRecipeSaveFail = (
  state: RecipeEditState,
  action: PayloadAction<any>
) => {
  return {
    ...state,
    loading: false,
    error: action.payload.error,
  };
};

const reduceRecipeSaveSuccess = (
  state: RecipeEditState,
  action: PayloadAction<[]>
) => {
  return {
    ...state,
    data: empty,
    loading: false,
    error: null,
  };
};

const reduceRecipeSaveRequest = (
  state: RecipeEditState,
  action: PayloadAction<any>
) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const reduceCancel = (state: RecipeEditState, action: PayloadAction<any>) => {
  return {
    ...state,
    data: empty,
    loading: false,
    error: null,
  };
};


const reduceChange = (state: RecipeEditState, action: PayloadAction<any>) => {
  const { data } = state;
  const {
    payload: { name, value },
  } = action;

  // if (name === "photo" || name === "alt") {
  //   const prop = name === "photo" ? "url" : name;
  //   return {
  //     ...state,
  //     data: { ...data, avatar: { ...data.avatar, [prop]: value } },
  //   };
  // }

  return {
    ...state,
    data: { ...data, [name]: value },
  };
};
