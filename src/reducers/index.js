import { combineReducers } from 'redux'
import * as TYPES from '../types'

const initialState = {
    people: [],
    species: []
}

const handleStarWarsFetchSuccess = (state, action) => {
    return {
        ...state,
        people : action.data
    }
}

const handleStarWarsFetchSpeciesSuccess = (state, action) => {
  return {
    ...state,
    species: action.data
  }
}

const starWars = (state = initialState, action) => {
    const handlers = {
        [TYPES.FETCH_STAR_WARS_SUCCESS]: handleStarWarsFetchSuccess,
        [TYPES.FETCH_STAR_WARS_SPECIES_SUCCESS]: handleStarWarsFetchSpeciesSuccess,
    }
    return handlers[action.type]
        ? handlers[action.type](state, action)
        : state
}

const rootReducer = combineReducers({
  starWars
})

export default rootReducer