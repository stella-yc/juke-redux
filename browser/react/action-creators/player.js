import {
  START_PLAYING,
  STOP_PLAYING,
  SET_CURRENT_SONG,
  SET_LIST,
  SET_PROGRESS
} from '../constants';

import axios from 'axios';

export const startPlaying = () => ({ type: START_PLAYING });

export const stopPlaying = () => ({ type: STOP_PLAYING });

export const setCurrentSong = (currentSong) => ({
  type: SET_CURRENT_SONG,
  currentSong
});

export const setCurrentSongList = (currentSongList) => ({
  type: SET_LIST,
  currentSongList
});
