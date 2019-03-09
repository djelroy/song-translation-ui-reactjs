import React from 'react';
import ReactDOM from 'react-dom';

interface Song {
    title: string;
    artist: string;
    lyrics: string;
}

interface SongProps {
    songs: Song[];
}

function SongHeader() {
    return (
        <tr>
            <td>Title</td>
            <td>Artist</td>
            <td>Lyrics</td>
        </tr>
    );
}

function SongRow(props: Song) { 
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td>{props.lyrics}</td>
        </tr>
    );   
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
export default class FilterableSongTable extends React.Component<SongProps, any> {
    render(){
        return (
            <div>
                <SongSearchBar />
                <SongTable songs={this.props.songs} />
            </div>            
        );
    }
}