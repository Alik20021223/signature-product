import {
  RECIPE_REMOVE,
  RECIPE_SUCCESS,
  RECIPE_FAIL,
  RECIPE_REQUEST,
} from "../actions";
import { PayloadAction } from "@reduxjs/toolkit";

export interface Recipe {
  title: string;
  description: string;
  timeCook: string;
  listProduct: string;
  avatar: string;
  id: number;
}

export interface RecipesState {
  data: Recipe[];
  loading: boolean;
  error: null;
}

const initialState: RecipesState = {
  data: [],
  loading: false,
  error: null,
  //   url: 'https://65cf1e2ebdb50d5e5f5a8591.mockapi.io/api/blog/recept',
};

export const RecipeReducer = (
  state = initialState,
  action: PayloadAction<any>
) => {
  switch (action.type) {
    case RECIPE_REMOVE:
      return reduceRemove(state, action);
    case RECIPE_SUCCESS:
      return reduceRecipeSuccess(state, action);
    case RECIPE_FAIL:
      return reduceRecipeFail(state, action);
    case RECIPE_REQUEST:
      return reduceRecipeRequest(state, action);
    default:
      return state;
  }
};

const reduceRecipeRequest = (
  state: RecipesState,
  action: PayloadAction<any>
) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const reduceRecipeSuccess = (
  state: RecipesState,
  action: PayloadAction<[]>
) => {
  return {
    ...state,
    data: action.payload,
    loading: false,
    error: null,
  };
};

const reduceRecipeFail = (state: RecipesState, action: PayloadAction<any>) => {
  return {
    ...state,
    loading: false,
    error: action.payload.error,
  };
};

const reduceRemove = (state: RecipesState, action: PayloadAction<any>) => {
  const { data } = state;
  return {
    ...state,
    data: data.filter((recipe) => recipe.id !== action.payload.id),
  };
};
