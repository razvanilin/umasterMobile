import {combineReducers} from 'redux'
import user from './user'
import token from './token'
import activities from './activities'

const rootReducer = combineReducers({
  user,
  token,
  activities
})

export default rootReducer
