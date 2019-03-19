import { call, put } from 'redux-saga/effects'
import * as TYPES from '../types'

const api = (url) => fetch(url).then(response => response.json())

export const fetchStarWarsRequest = () => ({
  type: TYPES.FETCH_STAR_WARS_REQUEST
})

export const fetchStarWarsPlanetsRequest = () => ({
  type: TYPES.FETCH_STAR_WARS_PLANETS_REQUEST
})

export function* fetchPlanets(action) {
  try {
    const planets = yield call(api, 'https://swapi.co/api/planets')

    yield put({ type: TYPES.FETCH_STAR_WARS_PLANETS_SUCCESS, data: planets.results })

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