import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; 
import { ReactComponent } from '*.svg';


interface Song {
    title: string;
    artist: string;
    lyrics: string;
}

interface SongProps {
    songs: Song[];
}

class SongHeader extends React.Component {
    render(){
        return (
            <tr>
                <td>Title</td>
                <td>Artist</td>
                <td>Lyrics</td>
        </tr>
        );
    }
}

class SongRow extends React.Component<Song, any> { 
    render(){
        const song = this.props;
        return (
            <tr>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.lyrics}</td>
            </tr>
        );
    }    
}

class SongTable extends React.Component<SongProps, any>{
    render(){
        const songRows = this.props.songs.map(song => 
            <SongRow title={song.title} artist={song.artist} lyrics={song.lyrics}/>);

        return (          
            <table style={{border: '1px solid black'}}>
                <thead><SongHeader/></thead>
                <tbody>{songRows}</tbody>
            </table>
        );
    }   
}

class SongSearchBar extends React.Component {
    render(){
        return (
            <form>
                <input type="text" placeholder="Search..."/>
                <p>
                    <input type="checkbox" />
                    Only with translations
                </p>
            </form>            
        );
    }
}
class FilterableSongTable extends React.Component<SongProps, any> {
    render(){
        return (
            <div>
                <SongSearchBar />
                <SongTable songs={this.props.songs} />
            </div>            
        );
    }
}

const SONGS = [
    {title: "In My Life", artist: "The Beatles", lyrics: "There are places I'll remember"},
    {title: "Sweet Emotion", artist: "Aerosmith", lyrics: "Talking 'bout the things that nobody cares"}
];

const elem = <h1>Hello React & Visual Studio Code people!</h1>





ReactDOM.render(<FilterableSongTable songs={SONGS} />, document.getElementById("root"));
