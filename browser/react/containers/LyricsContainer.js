import React from 'react';
import axios from 'axios';
import AddSong from '../components/AddSong';
import store from '../store';
import Lyrics from '../components/Lyrics';
import {setLyrics, fetchLyrics} from '../action-creators/lyrics';



class LyricsContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''},
      store.getState());

    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  setArtist (query) {
    this.setState({artistQuery: query});
  }

  setSong (song) {
    this.setState({songQuery: song});
  }

  handleSubmit (event) {
    console.log(this.state);
    event.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
    }
      // axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
      //   .then(response => {
      //     const setLyricsAction = setLyrics(response.data.lyric);
      //     store.dispatch(setLyricsAction);
      //   });

  }
  render() {
    return <Lyrics
      text={this.state.lyrics.text}
      setArtist={this.setArtist}
      setSong={this.setSong}
      artistQuery={this.state.artistQuery}
      songQuery={this.state.songQuery}
      handleSubmit={this.handleSubmit}
    />
  }

}

export default LyricsContainer;
