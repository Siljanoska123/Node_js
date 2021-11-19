import { api } from '../constants/api';



export const postUser = (comment) => {
    return fetch(`${api.root}/users/register`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
        .then(json => Promise.resolve(json))
        .catch(err => Promise.reject(err))
}