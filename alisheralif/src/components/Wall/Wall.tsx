import React from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { recipeFail, recipeSuccess } from '../../store/actions';
import { RecipesState } from '../../store/reducers/post';

const Wall = () => {
    const {loading, data, error} = useSelector((state: RecipesState) => state, shallowEqual)
    const url = 'https://65cf1e2ebdb50d5e5f5a8591.mockapi.io/api/blog/recept'
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(url).then((res) => {
            if (!res.ok) {
                throw new Error('bad http request')
            }

            return res.json()
        }).then((body) => {
            dispatch(recipeSuccess(body))
        }).catch(error => {
            dispatch(recipeFail(error))
          })
    }, [dispatch])
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{item.timeCook}</p>
                    <p>{item.listProduct}</p>
                </div>
            ))}
        </div>
    )
}

export default Wall