import { takeLatest, all } from 'redux-saga/effects'

import * as TYPES from '../types';
import { fetchPerson, fetchSpecies } from '../actions'

function* mySaga() {
  yield all([
    takeLatest(TYPES.FETCH_STAR_WARS_REQUEST, fetchPerson),
    takeLatest(TYPES.FETCH_STAR_WARS_SPECIES_REQUEST, fetchSpecies)
  ])
}

export default mySaga