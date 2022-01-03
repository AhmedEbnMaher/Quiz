import {GET_QUIZS,GET_ONE_QUIZS} from './actionTypes'
export function getQuizs() {
    return async dispatch => {
      const response = await fetch('http://localhost:3000/quizs/')
      let payload = await response.json()
  
        dispatch({
          type: GET_QUIZS,
          payload,
        })
      }}
      export function getOneQuizs(id) {
       
        return async dispatch => {
          const response = await fetch(`http://localhost:3000/quizs/${id}`)
          let payload = await response.json()
    console.log('we here',payload)
            dispatch({
              type: GET_ONE_QUIZS,
              payload,
            })
          }}