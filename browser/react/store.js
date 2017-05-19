import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
    lyrics: lyricsReducer,
    player: playerReducer })
  , /* preloadedState, */ composeEnhancers(
  applyMiddleware(loggerMiddleware, thunkMiddleware)
));

/*
  store = {
    state: {
      text: 'I am a song lyric'
    }

    dispatch()
    getState()
    subscribe()
  }
*/


export default store;
// applyMiddleware(loggerMiddleware)
// export default createStore(reducer,
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
