import { call, put } from 'redux-saga/effects'
import * as TYPES from '../types'

const api = (url) => fetch(url).then(response => response.json())

export const fetchStarWarsRequest = () => ({
  type: TYPES.FETCH_STAR_WARS_REQUEST
})

export const fetchStarWarsSpeciesRequest = () => ({
  type: TYPES.FETCH_STAR_WARS_SPECIES_REQUEST
})

export function* fetchSpecies(action) {
  try {
    const species = yield call(api, 'https://swapi.co/api/species')

    yield put({ type: TYPES.FETCH_STAR_WARS_SPECIES_SUCCESS, data: species.results })

  } catch (e) {
    console.error(e)
  }
}

export function* fetchPerson(action) {
  try {
    const person = yield call(api, 'https://swapi.co/api/people')

    yield put({ type: TYPES.FETCH_STAR_WARS_SUCCESS, data: person.results })

  } catch (e) {
    console.error(e)
  }
}