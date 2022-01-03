import { GET_QUIZS ,GET_ONE_QUIZS} from './actionTypes'

const INIT_STATE = {
  quizs: [],
  onequiz:{},

}

const quizsCreator = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_QUIZS:
      return {
        ...state,
        quizs: action.payload,
      }
      case GET_ONE_QUIZS:
        return {
          ...state,
          onequiz: action.payload,
        }

    default:
      return state
  }
}

export default quizsCreator
