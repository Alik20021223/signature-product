export const RECIPE_REQUEST = 'RECIPE_REQUEST'
export const RECIPE_SUCCESS = 'RECIPE_SUCCESS'
export const RECIPE_FAIL = 'RECIPE_FAIL'

export const RECIPE_SAVE_REQUEST = 'RECIPE_SAVE_REQUEST'
export const RECIPE_SAVE_SUCCESS = 'RECIPE_SAVE_SUCCESS'
export const RECIPE_SAVE_FAIL = 'RECIPE_SAVE_FAIL'

// export const RECIPE_EDIT_SUBMIT = 'RECIPE_EDIT_SUBMIT'
export const RECIPE_EDIT_CHANGE = 'RECIPE_EDIT_CHANGE'
export const RECIPE_EDIT_CANCEL = 'RECIPE_EDIT_CANCEL'
export const RECIPE_EDIT = 'RECIPE_EDIT'
export const RECIPE_SHOW = 'RECIPE_SHOW'
export const RECIPE_HIDE = 'RECIPE_HIDE'
export const RECIPE_REMOVE = 'RECIPE_REMOVE'
export const RECIPE_LIKE = 'RECIPE_LIKE'

export const recipeSaveRequest = () => {
    return {
        type: RECIPE_SAVE_REQUEST,
        payload: {},
    }
}

export const recipeSaveSuccess = (items: []) => {
    return {
        type: RECIPE_SAVE_SUCCESS,
        payload: {items},
    }
}

export const recipeSaveFail = (error: any) => {
    return {
        type: RECIPE_SAVE_FAIL,
        payload: {error},
    }
}

export const recipeRequest = () => {
    return {
        type: RECIPE_REQUEST,
        payload: {},
    }
}

export const recipeFail = (error: any) => {
    return {
        type: RECIPE_FAIL,
        payload: {error},
    }
}

export const recipeSuccess = (items: []) => {
    return {
        type: RECIPE_SUCCESS,
        payload: {items},
    }
}

export const editChange = (name, value) => {
    return {
        type: RECIPE_EDIT_CHANGE,
        payload: {name, value},
    }
}

export const editCancel = () => {
    return {
        type: RECIPE_EDIT_CANCEL,
        payload: {},
    }
}


export const edit = (id: number) => {
    return {
        type: RECIPE_EDIT,
        payload: {id}
    }
}

export const remove = (id: number) => {
    return {
        type: RECIPE_REMOVE,
        payload: {id}
    }
}
