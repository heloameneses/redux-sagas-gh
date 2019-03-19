import { connect } from 'react-redux'
import App from '../components/App'
import { fetchStarWarsRequest, fetchStarWarsSpeciesRequest } from '../actions'

const mapStateToProps = ({starWars}) => ({starWars})

const bindActionsToDispatch = dispatch => (
  {
      fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()),
      fetchStarWarsSpeciesRequest: () => dispatch(fetchStarWarsSpeciesRequest())
  }
)

const AppContainer = connect(mapStateToProps, bindActionsToDispatch)(App)

export default AppContainer
