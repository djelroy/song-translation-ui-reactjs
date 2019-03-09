import React from 'react';
import ReactDOM from 'react-dom';

interface Song {
    title: string;
    artist: string;
    lyrics: string;
}

interface SongProps {
    songs: Song[];
    searchText: string;
}

interface SongState {
    searchText: string;
    isOnlyWithTranslation: boolean
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
        const songRows: any = [];
        const searchText = this.props.searchText;
        
        
            this.props.songs.forEach((song: Song) => {
                if(song.title.includes(searchText)) {
                    songRows.push(
                        <SongRow title={song.title} artist={song.artist} lyrics={song.lyrics}/>
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
export default class FilterableSongTable extends React.Component<{songs: Song[]}, SongState> {
    constructor(props: SongProps){
        super(props);
        this.state = {
            searchText: '', 
            isOnlyWithTranslation: false
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
    render(){
        return (
            <div>
                <SongSearchBar 
                    isOnlyWithTranslation={this.state.isOnlyWithTranslation} 
                    searchText={this.state.searchText}
                    onHandleSearchTextChange={this.handleSearchTextChange}
                    onHandleOnlyWithTranslationChange={this.handleOnlyWithTranslationChange}
                    />
                <SongTable songs={this.props.songs} searchText={this.state.searchText}/>
            </div>            
        );
    }
}