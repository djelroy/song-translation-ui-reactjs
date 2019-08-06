import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import DeleteSong from "./DeleteSong";


interface Song {
    title: string;
    artist: string;
    lyrics: string;
    id? :number;
}

interface SongProps {
    songs: Song[];
    searchText: string;
}

interface SongState {
    searchText: string;
    isOnlyWithTranslation: boolean
}

interface Props {
    songs: Song[]
}
interface State {
    songs: Song[];
    isOnlyWithTranslation: boolean;
    searchText: string;
}

function SongHeader() {
    return (
        <tr>
            <td>Title</td>
            <td>Artist</td>
            <td>Lyrics</td>
            <td></td>
        </tr>
    );
}

function SongRow(props: Song) { 
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td>{props.lyrics}</td>
            <td><DeleteSong id={props.id}/></td>
        </tr>
    );   
}

class SongTable extends React.Component<SongProps, any>{
    
    render(){
        const songRows: any = [];
        const searchText = this.props.searchText;
        
        
            this.props.songs.forEach((song: Song) => {
                if(song.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                    songRows.push(
                        <SongRow title={song.title} artist={song.artist} lyrics={song.lyrics} id={song.id!}/>
                        
                    ); 
                    
                }
            }
        );

        return (          
            <table style={{border: '1px solid black'}}>
                <thead><SongHeader/></thead>
                <tbody>{songRows}</tbody>
            </table>
        );
    }   
}

class SongSearchBar extends React.Component<any, any> {
    constructor(props: any){
        super(props);  
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleIsOnlyWithTranslation = this.handleIsOnlyWithTranslation.bind(this);
    }

    handleSearchTextChange(e: any){
        this.props.onHandleSearchTextChange(e.target.value);
    }

    handleIsOnlyWithTranslation(e: any){
        this.props.onHandleOnlyWithTranslationChange(e.target.value);
    }

    render(){
        const isOnlyWithTranslation = this.props.isOnlyWithTranslation;
        const searchText = this.props.searchText;
         
        return (
            <form>
                <input type="text" placeholder="Search..." value={searchText} onChange={this.handleSearchTextChange}/>
                <p>
                    <input type="checkbox" checked={isOnlyWithTranslation} />
                    Only with translations
                </p>
            </form>            
        );
    }
}
export default class FilterableSongTable extends React.Component<{songs: Song[]}, State> {
    constructor(props: SongProps){
        super(props);
        this.state = {
            searchText: '', 
            isOnlyWithTranslation: false,
            songs: [],
        };

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleOnlyWithTranslationChange = this.handleOnlyWithTranslationChange.bind(this);
    }

    handleSearchTextChange(searchText: string){
        this.setState({searchText: searchText});
    }

    handleOnlyWithTranslationChange(isOnlyWithTranslation: boolean){
        this.setState({isOnlyWithTranslation: isOnlyWithTranslation});
    }

    componentDidMount(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        console.log("process.env.REACT_APP_SONG_TRANSLATION_API_URL = " + process.env.REACT_APP_SONG_TRANSLATION_API_URL);
        const url = process.env.REACT_APP_SONG_TRANSLATION_API_URL + "/songs";
        fetch(url)
        .then(response => response.json()) //should be response.json()
        .then(data => {this.setState({songs: data}); console.log(data)});
    }

    componentWillUnmount(){

    }

    render(){
        return (
            <div>
                <SongSearchBar 
                    isOnlyWithTranslation={this.state.isOnlyWithTranslation} 
                    searchText={this.state.searchText}
                    onHandleSearchTextChange={this.handleSearchTextChange}
                    onHandleOnlyWithTranslationChange={this.handleOnlyWithTranslationChange}
                    />
                <SongTable songs={this.state.songs} searchText={this.state.searchText}/>
            </div>            
        );
    }
}