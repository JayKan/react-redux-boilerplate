import createReducer from '../utils/createReducer';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

const preloadState = 0;
const counter = createReducer(preloadState, {
  [INCREMENT_COUNTER]: (state, action) => state + 1, // eslint-disable-line no-unused-vars
  [DECREMENT_COUNTER]: (state, action) => state - 1, // eslint-disable-line no-unused-vars
});

export default counter;
