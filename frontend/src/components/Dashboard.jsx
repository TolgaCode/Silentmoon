import React, { useState, useEffect } from 'react';
import MeditationPlaylistFirst from '../components/MeditationPlaylistFirst';
import useAuth from '../components/useAuth'
import SpotifyWebApi from 'spotify-web-api-node';
import PopUpPlayer from '../components/PopUpPlayer'
import playbtn from '../assets/img/playbtn.png'
import Navbar from './Navbar';
import PlaylistSearchResult from './PlaylistSearchResult';
import Player from './Player';
import '../sass/SpotifyLogin.scss'


export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  // const [search, setSearch] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  // const [playingPlaylist, setPlayingPlaylist] = useState();

  const [buttonPopup, setButtonPopup] = useState(false);

  const spotifyApi = new SpotifyWebApi({
    clientId: '162481308a2843359b4127ab067567b3',
  })

  // console.log(accessToken)
  // const choosePlaylist = (playlist) => {
  //   setPlayingPlaylist(playlist);
  //   setSearch("");
  // }

  // useEffect(() => {
  //   if (!accessToken) return
    
  //   spotifyApi.setAccessToken(accessToken);
  // }, [accessToken]);


  // useEffect(() => {
  //   if (!search) return setSearchResults([]);
  //   if (!accessToken) return;
   
  //   let cancel = false
  //   spotifyApi.searchPlaylists(search).then(res => {
  //     if (cancel) return
  //     //Searching for Playlists
  //     setSearchResults(
  //       res.body.playlists.items.map((playlist) => {
  //       return {
  //         title: playlist.name,
  //         uri: playlist.uri,
  //         albumUrl: playlist.images[0].url
  //       }
  //     }))
  //   });
  //   return () => cancel = true;
  // }, [search, accessToken]);


  return (
    <div className='spotify-head'>  
      <h1 className='logoDark'>SILENT MOON</h1>
      <main className='playbtns'>
        <img className='playlist-play-btn' src={playbtn} alt=""  onClick={() => setButtonPopup(true)} width="200px" height="200px"/>
        <div className='playlist-information'>
        <h3>Guided Meditation</h3>
        <p>Playlist</p>
        </div>
      </main>
      <PopUpPlayer trigger={buttonPopup} setTrigger={setButtonPopup}>
      <MeditationPlaylistFirst
        accessToken={accessToken} 
        />
      </PopUpPlayer>
      {/* <input className='input' type="" placeholder="Search for Music" value={search} onChange={e => setSearch(e.target.value)} />
      <div className='songs'>
        {searchResults.map(playlist => (
          <PlaylistSearchResult
            playlist={playlist}
            key={playlist.uri}
            choosePlaylist={choosePlaylist}
          />
        ))}
      </div> */}
      {/* <div className='player'>
        <Player 
        accessToken={accessToken} 
        playlistUri={playingPlaylist?.uri} 
        />
      </div> */}
      {/* <Navbar /> */}
    </div>

  )
  
}

