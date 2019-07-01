import request from 'superagent'

export const fetchedJoke = joke => {
  return ({
    type: JOKE_FETCHED,
    joke
  })
}

export const fetchJoke = () => dispatch => {
  request
    .get(`https://official-joke-api.appspot.com/jokes/programming/random`)
    .then(res => {
      dispatch(fetchedJoke(JSON.parse(res.text)))
    })
}

export const JOKE_FETCHED = "JOKE_FETCHED";