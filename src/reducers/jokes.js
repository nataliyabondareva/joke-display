import { JOKE_FETCHED } from '../actions/jokes'

const reducer = (state = null, action) => {
  switch (action.type) {
    case JOKE_FETCHED:
      return action.joke
    default:
      return state
  }
}

export default reducer