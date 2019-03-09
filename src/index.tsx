import React from 'react';
import ReactDOM from 'react-dom';
import FilterableSongTable from './FilterableSongTable'; 

const SONGS = [
    {title: "In My Life", artist: "The Beatles", lyrics: "There are places I'll remember"},
    {title: "Sweet Emotion", artist: "Aerosmith", lyrics: "Talking 'bout the things that nobody cares"},
    {title: "Shiny Happy People", artist: "R.E.M.", lyrics: "Shiny happy people laughing"}
];

ReactDOM.render(<FilterableSongTable songs={SONGS} />, document.getElementById("root"));
